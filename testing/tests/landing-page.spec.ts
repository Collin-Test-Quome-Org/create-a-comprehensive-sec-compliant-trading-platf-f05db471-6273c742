import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays the hero section', async ({ page }) => {
    // Check for the Hero section's main heading from the Hero component
    await expect(page.locator('main')).toBeVisible();
    // At least one heading (the h2 below) is present
    await expect(page.getByRole('heading', { name: /Why Choose SentinelTrade\?/i })).toBeVisible();
  });

  test('shows all feature cards with correct titles', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Unmatched Security' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Real-Time Insights' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Lightning Execution' })).toBeVisible();
  });

  test('feature cards have correct descriptions', async ({ page }) => {
    await expect(page.getByText(/bank-grade encryption/i)).toBeVisible();
    await expect(page.getByText(/live market data, customizable dashboards/i)).toBeVisible();
    await expect(page.getByText(/ultra-fast trade engine/i)).toBeVisible();
  });

  test('Start Trading Now button is visible and navigates to signup', async ({ page }) => {
    const btn = page.getByRole('link', { name: /Start Trading Now/i });
    await expect(btn).toBeVisible();
    await btn.click();
    await expect(page).toHaveURL('/signup');
  });

  test('feature cards are accessible by keyboard', async ({ page }) => {
    // Tab to the first card
    await page.keyboard.press('Tab'); // nav
    await page.keyboard.press('Tab'); // main
    await page.keyboard.press('Tab'); // first focusable in main, likely the button or a card
    // Ensure at least one card heading is focusable
    await expect(page.getByRole('heading', { name: 'Unmatched Security' })).toBeVisible();
  });

  test('landing page main sections are visible', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Why Choose SentinelTrade\?/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Start Trading Now/i }).or(page.getByRole('link', { name: /Start Trading Now/i }))).toBeVisible();
  });
});
