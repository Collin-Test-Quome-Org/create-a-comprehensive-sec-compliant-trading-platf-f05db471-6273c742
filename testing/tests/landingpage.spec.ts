import { test, expect } from '@playwright/test';

test.describe('Landing Page Content', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows the Hero section (brand presence)', async ({ page }) => {
    // The Hero component is assumed to be present at the top of the landing page
    // We'll check for the main headline, which may be in Hero
    // If there is a unique heading in the Hero, adjust this selector accordingly
    const heroHeading = page.getByRole('heading', { level: 1 });
    await expect(heroHeading).toBeVisible();
  });

  test('shows "Why Choose SentinelTrade?" section headline', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Why Choose SentinelTrade\?/ })).toBeVisible();
  });

  test('shows three feature cards with correct headings', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Unmatched Security' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Real-Time Insights' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Lightning Execution' })).toBeVisible();
    // There should be three feature cards
    const cardHeadings = page.locator('h3.font-bold');
    await expect(cardHeadings).toHaveCount(3);
  });

  test('each feature card contains correct description', async ({ page }) => {
    await expect(page.getByText(/bank-grade encryption, real-time fraud detection, and continuous compliance monitoring/i)).toBeVisible();
    await expect(page.getByText(/live market data, customizable dashboards, and actionable analytics/i)).toBeVisible();
    await expect(page.getByText(/ultra-fast trade engine delivers execution at the speed of opportunity/i)).toBeVisible();
  });

  test('shows "Start Trading Now" button linking to signup', async ({ page }) => {
    const ctaBtn = page.getByRole('link', { name: 'Start Trading Now' });
    await expect(ctaBtn).toBeVisible();
    await expect(ctaBtn).toHaveAttribute('href', '/signup');
    await ctaBtn.click();
    await expect(page).toHaveURL('/signup');
  });

  test('basic accessibility: all major headings use semantic tags', async ({ page }) => {
    // Check that h2 is present for the section
    const h2 = page.locator('h2.font-bold');
    await expect(h2.filter({ hasText: 'Why Choose SentinelTrade?' })).toHaveCount(1);
    // Each feature card should have h3 heading
    const h3s = page.locator('h3.font-bold');
    await expect(h3s).toHaveCount(3);
  });
});
