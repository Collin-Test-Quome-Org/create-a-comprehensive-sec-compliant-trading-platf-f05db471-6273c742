// tests for LandingPage (homepage)
import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders Hero section and main call-to-action', async ({ page }) => {
    // Section heading
    await expect(page.getByRole('heading', { name: 'Why Choose SentinelTrade?' })).toBeVisible();
    // All three feature cards
    await expect(page.getByRole('heading', { name: 'Unmatched Security' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Real-Time Insights' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Lightning Execution' })).toBeVisible();
    // Feature card texts
    await expect(page.getByText(/bank-grade encryption/i)).toBeVisible();
    await expect(page.getByText(/live market data/i)).toBeVisible();
    await expect(page.getByText(/ultra-fast trade engine/i)).toBeVisible();
    // CTA button
    await expect(page.locator('#start-trading-btn')).toBeVisible();
    await expect(page.locator('#start-trading-btn')).toHaveText(/Start Trading Now/i);
  });

  test('Start Trading Now button navigates to /signup', async ({ page }) => {
    await page.locator('#start-trading-btn').click();
    await expect(page).toHaveURL('/signup');
  });

  test('feature cards use correct icons and styles', async ({ page }) => {
    // Each card has a blue background icon (SVG inside span.bg-blue-700)
    const iconSpans = page.locator('span.bg-blue-700');
    await expect(iconSpans).toHaveCount(3);
    for (let i = 0; i < 3; i++) {
      await expect(iconSpans.nth(i).locator('svg')).toBeVisible();
    }
  });

  test('Landing page main sections are accessible', async ({ page }) => {
    // Main landmark
    await expect(page.getByRole('main')).toBeVisible();
    // Section with heading
    await expect(page.getByRole('heading', { name: 'Why Choose SentinelTrade?' })).toBeVisible();
    // CTA button is a link
    await expect(page.locator('#start-trading-btn')).toHaveAttribute('type', /button|submit/);
  });
});
