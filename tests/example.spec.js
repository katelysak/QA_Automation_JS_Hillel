// @ts-check
const { test, expect, chromium } = require('@playwright/test');
const { url } = require('inspector');
const { firefox } = require('playwright');     // firefox browser import

test('has title', async ({}) => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://playwright.dev/');
  await page.pause();


  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  await page.getByRole('link', { name: 'Community' }).click()
  await expect(page.getByRole('link', { name: 'Release Videos', exact: true })).toHaveText('Release Videos');
  await page.getByRole('link', { name: 'Ambassador page' }).click();
  await page.getByText('Andrew Knight').click();
  await page.getByText('North Carolina').click();
  await page.getByText('USA').first().click();
  await page.locator('.languages_gboq').first().click();
  await page.getByRole('link', { name: 'Conference Videos' }).click();

  // await expect(page.url()).toBe("xxx")

  // await page.pause();
  await browser.close();
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});




