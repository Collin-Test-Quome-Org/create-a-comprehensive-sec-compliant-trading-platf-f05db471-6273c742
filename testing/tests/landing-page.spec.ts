import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test('renders hero section and main features', async ({ page }) => {
    await page.goto('/');
    // Expect a Hero component (heading or main feature)
    await expect(page.getByRole('heading', { name: /Why Choose SentinelTrade\?/ })).toBeVisible();
    // Feature cards
    await expect(page.getByRole('heading', { name: /Unmatched Security/ })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Real-Time Insights/ })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Lightning Execution/ })).toBeVisible();
    // Feature texts
    await expect(page.getByText(/bank-grade encryption, real-time fraud detection/i)).toBeVisible();
    await expect(page.getByText(/live market data, customizable dashboards/i)).toBeVisible();
    await expect(page.getByText(/ultra-fast trade engine delivers execution/i)).toBeVisible();
  });

  test('Start Trading Now button is visible and navigates to signup', async ({ page }) => {
    await page.goto('/');
    const startTradingBtn = page.getByRole('button', { name: /Start Trading Now/i });
    await expect(startTradingBtn).toBeVisible();
    await startTradingBtn.click();
    await expect(page).toHaveURL('/signup');
  });

  test('landing page is accessible (has main landmark and headings)', async ({ page }) => {
    await page.goto('/');
    // Main landmark
    await expect(page.locator('main')).toBeVisible();
    // Has at least one h1 or h2
    const headings = await page.locator('h1, h2').all();
    expect(headings.length).toBeGreaterThan(0);
  });
});
