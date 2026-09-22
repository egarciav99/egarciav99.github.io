/* ============================================
   MAIN.JS — Portfolio Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Dynamic Year ----
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Scroll Progress Bar ----
  const progressBar = document.createElement('div');
  progressBar.id = 'scroll-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 2px;
    width: 0%;
    background: var(--accent);
    z-index: 9999;
    transition: width 0.12s linear;
    pointer-events: none;
  `;
  document.body.prepend(progressBar);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // ---- Custom Cursor (desktop only) ----
  // The frame loop only runs while the dot is catching up with the pointer.
  const isTouchDevice = window.matchMedia('(hover: none)').matches;

  if (!isTouchDevice && !prefersReducedMotion.matches) {
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    cursor.style.cssText = `
      position: fixed;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--accent);
      pointer-events: none;
      z-index: 99999;
      left: 0;
      top: 0;
      will-change: transform;
      transition: width 0.2s var(--ease-out), height 0.2s var(--ease-out),
                  background 0.2s, border 0.2s, opacity 0.2s;
      opacity: 0;
    `;
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let renderX = 0;
    let renderY = 0;
    let cursorFrame = null;
    const LERP = 0.35; // higher = snappier (0-1)

    function animateCursor() {
      renderX += (mouseX - renderX) * LERP;
      renderY += (mouseY - renderY) * LERP;
      if (Math.abs(mouseX - renderX) < 0.5 && Math.abs(mouseY - renderY) < 0.5) {
        renderX = mouseX;
        renderY = mouseY;
        cursorFrame = null;
      } else {
        cursorFrame = requestAnimationFrame(animateCursor);
      }
      cursor.style.transform = `translate(${renderX - 4}px, ${renderY - 4}px)`;
    }

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.opacity = '1';
      if (cursorFrame === null) cursorFrame = requestAnimationFrame(animateCursor);
    });

    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });

    // Expand cursor on interactive elements (event delegation)
    const INTERACTIVE = 'a, button, .card, .cv__download-card, .badge';
    document.addEventListener('mouseover', (e) => {
      const el = e.target.closest(INTERACTIVE);
      if (!el || el.contains(e.relatedTarget)) return;
      cursor.style.width = '24px';
      cursor.style.height = '24px';
      cursor.style.background = 'transparent';
      cursor.style.border = '1.5px solid var(--accent)';
    });
    document.addEventListener('mouseout', (e) => {
      const el = e.target.closest(INTERACTIVE);
      if (!el || el.contains(e.relatedTarget)) return;
      const next = e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest(INTERACTIVE);
      if (next) return;
      cursor.style.width = '8px';
      cursor.style.height = '8px';
      cursor.style.background = 'var(--accent)';
      cursor.style.border = 'none';
    });
  }

  // ---- Navbar scroll behavior ----
  const nav = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  const SCROLL_THRESHOLD = 50;

  function handleNavScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll > SCROLL_THRESHOLD) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Update scroll progress bar
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const pct = totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }

  // ---- Active nav link tracking (IntersectionObserver, no layout reads on scroll) ----
  function setActiveLink(sectionId) {
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('data-section') === sectionId);
    });
  }

  if ('IntersectionObserver' in window) {
    // A section is "current" when it crosses a thin band at 25% of the viewport height.
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { rootMargin: '-25% 0px -74% 0px' }
    );
    sections.forEach((section) => activeObserver.observe(section));
  }

  // Throttle scroll events
  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        handleNavScroll();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });

  // ---- Mobile Navigation ----
  const hamburger = document.getElementById('nav-hamburger');
  const navLinksContainer = document.getElementById('nav-links');
  const overlay = document.getElementById('nav-overlay');

  function setMobileNavState(isOpen) {
    if (!hamburger || !navLinksContainer || !overlay) return;

    hamburger.classList.toggle('active', isOpen);
    navLinksContainer.classList.toggle('open', isOpen);
    overlay.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function toggleMobileNav() {
    const willOpen = !navLinksContainer.classList.contains('open');
    setMobileNavState(willOpen);
  }

  function closeMobileNav() {
    setMobileNavState(false);
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleMobileNav);
  }

  if (overlay) {
    overlay.addEventListener('click', closeMobileNav);
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', closeMobileNav);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileNav();
  });

  // ---- Intersection Observer: Scroll Reveal ----
  const revealElements = document.querySelectorAll('.reveal');

  // Mark body so CSS knows JS loaded (disables the 3s fallback animation)
  document.body.classList.add('js-loaded');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver
    revealElements.forEach((el) => el.classList.add('visible'));
  }

  // ---- Smooth scroll — offset robusto con nav.offsetHeight ----
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const navHeight = nav ? nav.offsetHeight : 72;
        const targetPosition = targetElement.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: prefersReducedMotion.matches ? 'auto' : 'smooth',
        });
      }
    });
  });

  // ---- Hero mouse glow effect ----
  // Eases towards the pointer with transform; the frame loop stops once it has caught up.
  // pointermove only fires over the hero, so nothing runs while the hero is off-screen.
  const hero = document.querySelector('.hero');
  const glow1 = hero && hero.querySelector('.hero__glow--1');
  if (glow1 && !prefersReducedMotion.matches) {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let glowFrame = null;

    function animateGlow() {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      if (Math.abs(targetX - currentX) < 0.5 && Math.abs(targetY - currentY) < 0.5) {
        currentX = targetX;
        currentY = targetY;
        glowFrame = null;
      } else {
        glowFrame = requestAnimationFrame(animateGlow);
      }
      glow1.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    }

    hero.addEventListener('pointermove', (e) => {
      const rect = hero.getBoundingClientRect();
      targetX = e.clientX - rect.left - 300;
      targetY = e.clientY - rect.top - 300;
      if (glowFrame === null) glowFrame = requestAnimationFrame(animateGlow);
    });
  }

  // ---- Console easter egg ----
  console.log(
    '%c⚡ Elier Garcia — Portfolio',
    'color: #2563eb; font-size: 16px; font-weight: bold;'
  );
  console.log(
    '%cBuilt from scratch. No templates, no shortcuts.',
    'color: #94a3b8; font-size: 12px;'
  );
});
