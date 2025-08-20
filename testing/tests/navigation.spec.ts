// Navigation component and navigation menu tests
import { test, expect } from '@playwright/test';

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders logo and brand name, and navigates home on logo click', async ({ page }) => {
    const logo = page.locator('nav img');
    const brandName = page.getByText('Sentinel Markets');
    await expect(logo).toBeVisible();
    await expect(brandName).toBeVisible();
    // Navigate away, then click logo to return home
    await page.goto('/market-data');
    await logo.first().click();
    await expect(page).toHaveURL('/');
    await expect(page.getByText('Why Choose SentinelTrade?')).toBeVisible();
  });

  test('Navigation menu contains expected links', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Market Data/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Portfolio/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Compliance/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Account/ })).toBeVisible();
  });

  test('navigates to Market Data when clicking Market Data menu item', async ({ page }) => {
    await page.getByRole('link', { name: /Market Data/ }).click();
    await expect(page).toHaveURL('/market-data');
  });

  test('navigates to Portfolio when clicking Portfolio menu item', async ({ page }) => {
    await page.getByRole('link', { name: /Portfolio/ }).click();
    await expect(page).toHaveURL('/portfolio');
  });

  test('navigates to Compliance when clicking Compliance menu item', async ({ page }) => {
    await page.getByRole('link', { name: /Compliance/ }).click();
    // The compliance link navigates to '/compliance-monitoring' (per code)
    await expect(page).toHaveURL('/compliance-monitoring');
  });

  test('navigates to Account when clicking Account menu item', async ({ page }) => {
    await page.getByRole('link', { name: /Account/ }).click();
    await expect(page).toHaveURL('/account');
  });

  test('navigation bar is sticky at the top', async ({ page }) => {
    const nav = page.locator('nav');
    // Simulate scrolling
    await page.evaluate(() => window.scrollBy(0, 500));
    await expect(nav).toBeVisible();
    // Check that nav is still at the top (sticky)
    const bounding = await nav.boundingBox();
    expect(bounding?.y).toBeLessThanOrEqual(0);
  });
});
