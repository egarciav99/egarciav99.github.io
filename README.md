# ⚡ Elier Garcia — Portfolio

Personal portfolio for Elier Garcia, a hybrid profile combining electrical engineering with AI and automation work.

**Live:** [egarciav99.github.io](https://egarciav99.github.io)

---

## About

I'm an Electrical Engineer from Chihuahua, Mexico, now based in Madrid. I hold an M.S. in Business Analytics & AI from INESDI and have hands-on experience delivering industrial electrical works for **Microsoft** and **BMW Group**. I now build AI systems, automation flows and web platforms through **EG Solutions**.

## Projects and real status

### 🥗 Bocado AI
AI nutrition app · team project.
- Working demo available.
- Official launch pending.
- MVP created from a master's thesis and reached 200 real users.
- Running cost under €0.50/month.

### ✍️ CoverCraft
AI cover-letter generator · personal project.
- In real use.

### 📄 PDF Technical Assistant
RAG assistant for electrical engineering documentation.
- In active development.

### ⚙️ CoreIT Automatización
Client-confidential automation hub.
- MVP in development.

### 🎟️ Loyalty platform concept
Technical proposal and working demo.
- Demo functional and pending client response.

## Site stack

- HTML5
- CSS3
- JavaScript vanilla
- i18n EN/ES
- Static hosting on GitHub Pages

## Deploy

This site is deployed on GitHub Pages. Push to `main` and GitHub handles the automatic static deployment.

```bash
git add .
git commit -m "your message"
```

## CV in PDF

`Elier_Garcia_CV_ES.pdf` and `Elier_Garcia_CV_EN.pdf` are generated from the site, not edited by hand:

- `cv.html` + `scripts/cv.js` build a one-page A4 CV from `scripts/i18n.js`, `scripts/projects-i18n.js` and `index.html` (the first 3 projects, in site order, and the stack badges marked with `data-cv`).
- CV-only texts (headline, profile summary, education details) are the `cvp_*` keys in `scripts/i18n.js`. Bullets per job and number of projects: `CV_BULLETS` and `CV_PROJECTS` in `scripts/cv.js`.
- The **Generar CV en PDF** workflow runs `scripts/build-cv.mjs` (Playwright + Chromium) on every push that touches those files and commits the new PDFs. It shrinks the text if needed so the CV fits on one page.
- The public PDF has no phone number. `Elier_Garcia_CV_EL.pdf` (electrical engineering) is still maintained by hand.

Local build: `npm install --no-save playwright && npx playwright install chromium && node scripts/build-cv.mjs`. Preview in the browser: `cv.html?lang=es` or `?lang=en` (served over HTTP).

## Contact

- 📧 eliergv.99@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/eliergv/)
- 🐙 [GitHub](https://github.com/egarciav99)
- 📍 Madrid, Spain

---

Built by hand. ⚡
