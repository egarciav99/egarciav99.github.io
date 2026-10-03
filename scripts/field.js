/* ============================================
   FIELD.JS · Campo eléctrico del hero
   WebGL2 sin dependencias. Mejora progresiva: sin WebGL2,
   en táctil o con movimiento reducido se queda el fondo CSS.
   ============================================ */

const FRAG = `#version 300 es
precision highp float;
uniform vec2  u_res;
uniform float u_time;
uniform vec2  u_mouse;   // px, origen abajo-izquierda
uniform vec3  u_a;       // acento (oro)
uniform vec3  u_b;       // secundario (azul)
out vec4 o;

// Potencial de una carga puntual
float pot(vec2 p, vec2 c, float q) { return q / max(length(p - c), 0.03); }

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / u_res.y;
  vec2 m  = (u_mouse        - 0.5 * u_res) / u_res.y;
  float t = u_time * 0.12;

  // El cursor es una carga positiva; dos cargas lentas dan vida al reposo
  vec2 c1 = vec2(cos(t), sin(t * 1.3)) * 0.55;
  vec2 c2 = vec2(sin(t * 0.7 + 2.0), cos(t * 0.9)) * 0.65;
  float v = pot(uv, m, 0.30) + pot(uv, c1, 0.22) - pot(uv, c2, 0.22);

  // Líneas equipotenciales antialiasadas
  float k = 5.0;
  float f = fract(v * k);
  float w = fwidth(v * k);
  float line = 1.0 - smoothstep(0.0, w * 1.5, min(f, 1.0 - f));
  line *= smoothstep(3.5, 1.5, abs(v));       // sin moiré junto a las cargas

  float glow = exp(-length(uv - m) * 3.5);
  vec3 col = mix(u_b, u_a, clamp(v * 0.6 + 0.5, 0.0, 1.0));
  float a = line * 0.28 + glow * 0.10;
  o = vec4(col * a, a);                         // alfa premultiplicado
}`;

const VERT = `#version 300 es
in vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }`;

// Acepta '#rrggbb' o 'rgb(r, g, b)' (con @property, getComputedStyle devuelve rgb())
function toRgb(value, fallback) {
  const v = value.trim();
  const m = v.match(/rgba?\(([^)]+)\)/);
  if (m) return m[1].split(/[ ,/]+/).slice(0, 3).map((n) => parseFloat(n) / 255);
  const h = (v || fallback).replace('#', '');
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
}

function initField(host) {
  const mq = (q) => window.matchMedia(q).matches;
  // Solo escritorio con ratón: en táctil no hay cursor que siga el campo y el
  // coste de compilar el shader en un móvil modesto no compensa (TBT).
  if (!host || !mq('(hover: hover) and (pointer: fine)')) return null;
  // Con movimiento reducido se dibuja una imagen fija: sin bucle ni seguimiento del cursor
  const still = mq('(prefers-reduced-motion: reduce)');
  if (navigator.connection && navigator.connection.saveData) return null;

  const canvas = document.createElement('canvas');
  canvas.className = 'field-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  const gl = canvas.getContext('webgl2', { premultipliedAlpha: true, antialias: false });
  if (!gl) return null;

  const compile = (type, src) => {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
    return s;
  };
  const prog = gl.createProgram();
  gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
  gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog);
  gl.useProgram(prog);

  // Un triángulo que cubre toda la pantalla
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'p');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

  const u = Object.fromEntries(
    ['u_res', 'u_time', 'u_mouse', 'u_a', 'u_b'].map((n) => [n, gl.getUniformLocation(prog, n)])
  );

  // Colores desde los tokens CSS: si la paleta cambia, el campo también
  const readPalette = () => {
    const cs = getComputedStyle(document.documentElement);
    gl.uniform3fv(u.u_a, toRgb(cs.getPropertyValue('--accent'), '#c9a24b'));
    gl.uniform3fv(u.u_b, toRgb(cs.getPropertyValue('--accent-secondary'), '#2542a8'));
  };
  readPalette();
  document.addEventListener('palettechange', readPalette);

  // Resolución reducida: el efecto es difuso, no necesita píxeles nativos
  const SCALE = 0.6;
  let w = 0, h = 0;
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    w = Math.round(host.clientWidth * dpr * SCALE);
    h = Math.round(host.clientHeight * dpr * SCALE);
    canvas.width = w;
    canvas.height = h;
    gl.viewport(0, 0, w, h);
    gl.uniform2f(u.u_res, w, h);
  };
  new ResizeObserver(resize).observe(host);
  resize();

  const render = (time, x, y) => {
    gl.uniform1f(u.u_time, time);
    gl.uniform2f(u.u_mouse, x, y);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };

  if (still) {
    // Instante elegido para que las cargas queden repartidas por el hero
    const drawStill = () => render(9, w * 0.72, h * 0.62);
    new ResizeObserver(drawStill).observe(host);
    document.addEventListener('palettechange', drawStill);
    host.prepend(canvas);
    (host.closest('section') || host).classList.add('has-field');
    drawStill();
    canvas.classList.add('is-on');
    return canvas;
  }

  // Ratón con inercia (en px del canvas, eje Y invertido para GL)
  let tx = w * 0.7, ty = h * 0.6, mx = tx, my = ty;
  // Se escucha en la sección: el contenido del hero tapa al fondo y no le llegan eventos
  (host.closest('section') || host).addEventListener('pointermove', (e) => {
    const r = host.getBoundingClientRect();
    tx = ((e.clientX - r.left) / r.width) * w;
    ty = (1 - (e.clientY - r.top) / r.height) * h;
  });

  // El bucle solo corre con el hero visible y la pestaña activa, a ~30 fps
  let visible = false, frame = null, last = 0;
  const start = performance.now();
  const draw = (now) => {
    frame = null;
    if (!visible || document.hidden) return;
    frame = requestAnimationFrame(draw);
    if (now - last < 33) return;
    last = now;
    mx += (tx - mx) * 0.08;
    my += (ty - my) * 0.08;
    render((now - start) / 1000, mx, my);
  };
  const kick = () => { if (frame === null && visible && !document.hidden) frame = requestAnimationFrame(draw); };
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; kick(); }).observe(host);
  document.addEventListener('visibilitychange', kick);

  host.prepend(canvas);
  // main.js deja de mover su brillo: el shader ya dibuja uno alrededor del cursor
  (host.closest('section') || host).classList.add('has-field');
  requestAnimationFrame(() => canvas.classList.add('is-on')); // fundido de entrada
  return canvas;
}

// main.js solo importa este módulo en escritorio con ratón y tras el evento load;
// aquí se espera además a un momento ocioso para no competir con el LCP
const boot = () => initField(document.querySelector('.hero__bg'));
if ('requestIdleCallback' in window) requestIdleCallback(boot, { timeout: 2000 });
else setTimeout(boot, 200);
