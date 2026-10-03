# ⚡ Elier Garcia · Portfolio

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
- MVP created from a master's thesis and reached 234 real users.

### ✍️ CoverCraft
AI cover-letter generator · personal project.
- In real use.

### 📄 PDF Technical Assistant
RAG assistant for electrical engineering documentation.
- In active development.

### ⚙️ CoreIT Automatización
Client-confidential automation hub.
- MVP in development.

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

The CVs are generated from the site, not edited by hand:

| File | Variant | Language |
|---|---|---|
| `Elier_Garcia_CV_ES.pdf` / `Elier_Garcia_CV_EN.pdf` | Data & AI (`cv.html?cv=data`) | ES / EN |
| `Elier_Garcia_CV_EL.pdf` / `Elier_Garcia_CV_EL_ES.pdf` | Electrical engineering (`cv.html?cv=el`) | EN / ES |

- `cv.html` + `scripts/cv.js` build a one-page A4 CV from `scripts/i18n.js`, `scripts/projects-i18n.js` and `index.html`. Each variant is configured in `CV_VARIANTS` (`scripts/cv.js`): projects, bullets per job, certifications and education order.
- CV-only texts are the `cvp_*` keys in `scripts/i18n.js` (`cvp_el_*` for the electrical CV: headline, profile, job bullets and the PDF Technical Assistant summary). The detailed source for the electrical bullets is `eg-content/perfil/experiencia.md`.
- Stack badges shown in each CV are marked in `index.html` with `data-cv` (Data & AI) and `data-cv-el` (electrical).
- The **Generar CV en PDF** workflow runs `scripts/build-cv.mjs` (Playwright + Chromium) on every push that touches those files and commits the new PDFs. It shrinks the text if needed so each CV fits on one page.
- The public PDFs have no phone number. The electrical CV card on the site downloads the file in the current language (`data-i18n-href`).

Local build: `npm install --no-save playwright && npx playwright install chromium && node scripts/build-cv.mjs`. Preview in the browser: `cv.html?cv=el&lang=es` (served over HTTP).

## Uptime check

The **Comprobar webs** workflow (`.github/workflows/webs.yml`) checks every 30 minutes that the personal site, EG Solutions, CoverCraft, the PDF Technical Assistant demo, Bocado AI and the Carolina Guijarro site respond. If one fails three times in a row it opens an issue labelled `caida` (GitHub emails the owner) and closes it when the site is back. Edit `SITES` to add or remove sites.

## Contact

- 📧 eliergv.99@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/eliergv/)
- 🐙 [GitHub](https://github.com/egarciav99)
- 📍 Madrid, Spain

---

Built by hand. ⚡
