// Genera los CV en PDF (Data & AI en ES/EN y eléctrico en EN/ES) a partir de cv.html.
// Uso: node scripts/build-cv.mjs   (necesita el paquete "playwright" con Chromium)
// Si el CV no cabe en una página, reduce la escala del texto (--s) hasta que quepa.
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const root = fileURLToPath(new URL('..', import.meta.url));
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml' };
const server = http.createServer(async (req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^([/\\])+/, '');
  try {
    const body = await readFile(join(root, path || 'index.html'));
    res.writeHead(200, { 'Content-Type': types[extname(path)] || 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}`;

const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
const A4_HEIGHT_PX = 297 / 25.4 * 96;
try {
  const outputs = [
    { cv: 'data', lang: 'es', file: 'Elier_Garcia_CV_ES.pdf' },
    { cv: 'data', lang: 'en', file: 'Elier_Garcia_CV_EN.pdf' },
    { cv: 'el', lang: 'en', file: 'Elier_Garcia_CV_EL.pdf' },
    { cv: 'el', lang: 'es', file: 'Elier_Garcia_CV_EL_ES.pdf' },
  ];
  for (const { cv, lang, file } of outputs) {
    const page = await browser.newPage();
    await page.goto(`${base}/cv.html?cv=${cv}&lang=${lang}`);
    await page.waitForSelector('body[data-ready="1"]', { timeout: 30000 });
    await page.emulateMedia({ media: 'print' });

    let scale = 1;
    for (;;) {
      const height = await page.evaluate(() => document.querySelector('.page').scrollHeight);
      if (height <= A4_HEIGHT_PX + 1 || scale <= 0.8) break;
      scale = Math.round((scale - 0.02) * 100) / 100;
      await page.evaluate((s) => document.documentElement.style.setProperty('--s', s), scale);
    }
    const height = await page.evaluate(() => document.querySelector('.page').scrollHeight);
    if (height > A4_HEIGHT_PX + 1) throw new Error(`${file}: no cabe en una página ni al 80 %`);

    await page.pdf({ path: join(root, file), format: 'A4', printBackground: true, pageRanges: '1' });
    console.log(`${file}: escala ${scale}`);
    await page.close();
  }
} finally {
  await browser.close();
  server.close();
}
