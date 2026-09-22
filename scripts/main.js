/* ============================================
   MAIN.JS — Portfolio Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Dynamic Year ----
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Progress bar is kept only as a lightweight visual, without continuous frame loops.
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

  // ---- Navbar scroll behavior ----
  const nav = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

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

  // ---- Active nav link tracking ----
  function updateActiveLink() {
    const scrollPos = window.scrollY + 200;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // Throttle scroll events
  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        handleNavScroll();
        updateActiveLink();
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

  // ---- Hero mouse glow effect (single pointer-driven update, no continuous RAF loop) ----
  const hero = document.querySelector('.hero');
  if (hero) {
    const glow1 = hero.querySelector('.hero__glow--1');

    if (glow1 && !prefersReducedMotion.matches) {
      hero.addEventListener('pointermove', (e) => {
        const rect = hero.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;
        glow1.style.transform = `translate(${offsetX * 0.12}px, ${offsetY * 0.12}px)`;
      });

      hero.addEventListener('pointerleave', () => {
        glow1.style.transform = 'translate3d(0, 0, 0)';
      });
    }
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
