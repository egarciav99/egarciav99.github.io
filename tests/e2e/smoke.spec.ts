import type { Page } from '@playwright/test';
import { test, expect } from './fixtures';

/** Recoge errores de JS y respuestas locales con error mientras se usa la página. */
function watch(page: Page) {
  const problems: string[] = [];
  page.on('pageerror', (e) => problems.push(`pageerror: ${e.message}`));
  page.on('console', (m) => {
    if (m.type() === 'error' && /Content Security Policy|Refused to/i.test(m.text())) problems.push(m.text());
  });
  page.on('response', (r) => {
    const url = r.url();
    if (url.startsWith('http://127.0.0.1') && r.status() >= 400) problems.push(`HTTP ${r.status()} ${url}`);
  });
  return problems;
}

test.describe('portafolio', () => {
  test('carga sin errores y con un h1', async ({ page }) => {
    const problems = watch(page);
    await page.goto('/index.html');
    await expect(page.locator('h1')).toBeVisible();
    await page.waitForLoadState('networkidle');
    expect(problems).toEqual([]);
  });

  test('no hay scroll horizontal', async ({ page }) => {
    await page.goto('/index.html');
    await page.waitForLoadState('networkidle');
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);
  });

  test('las imágenes locales cargan', async ({ page }) => {
    await page.goto('/index.html');
    await page.waitForLoadState('networkidle');
    await page.evaluate(() => document.querySelectorAll('img[loading="lazy"]').forEach((i) => ((i as HTMLImageElement).loading = 'eager')));
    await page.waitForLoadState('networkidle');
    const broken = await page.$$eval('img', (imgs) =>
      imgs
        .filter((i) => i.src.startsWith(location.origin) && i.complete && i.naturalWidth === 0)
        .map((i) => i.src),
    );
    expect(broken).toEqual([]);
  });

  test('el cambio de idioma traduce la página', async ({ page }) => {
    await page.goto('/index.html');
    const before = await page.locator('html').getAttribute('lang');
    await page.locator('#lang-toggle').click();
    await expect(page.locator('html')).not.toHaveAttribute('lang', before ?? '');
  });

  test('los filtros de proyectos ocultan y muestran tarjetas', async ({ page }) => {
    await page.goto('/index.html');
    const cards = page.locator('.portfolio__grid .project-card');
    const total = await cards.count();
    expect(total).toBeGreaterThan(0);
    await page.locator('.portfolio__filter[data-filter="ai"]').click();
    const visibleAi = await cards.evaluateAll((els) => els.filter((el) => !(el as HTMLElement).hidden).length);
    expect(visibleAi).toBeGreaterThan(0);
    expect(visibleAi).toBeLessThan(total);
    await page.locator('.portfolio__filter[data-filter="all"]').click();
    const visibleAll = await cards.evaluateAll((els) => els.filter((el) => !(el as HTMLElement).hidden).length);
    expect(visibleAll).toBe(total);
  });

  test('no aparece Acumula Yardas en ninguna parte', async ({ page }) => {
    await page.goto('/index.html');
    expect((await page.content()).toLowerCase()).not.toContain('acumula');
  });
});

for (const [cv, lang] of [['data', 'es'], ['data', 'en'], ['el', 'en'], ['el', 'es']]) {
  test(`CV ${cv}/${lang} se genera y cabe en una página A4`, async ({ page }) => {
    const problems = watch(page);
    await page.goto(`/cv.html?cv=${cv}&lang=${lang}`);
    await page.waitForSelector('body[data-ready="1"]');
    await page.emulateMedia({ media: 'print' });
    const a4 = (297 / 25.4) * 96;
    // Misma regla que build-cv.mjs: puede reducir la escala hasta 0,8 para caber.
    await page.evaluate(() => document.documentElement.style.setProperty('--s', '0.8'));
    const height = await page.evaluate(() => document.querySelector('.page')!.scrollHeight);
    expect(height).toBeLessThanOrEqual(a4 + 1);
    expect(problems).toEqual([]);
  });
}
