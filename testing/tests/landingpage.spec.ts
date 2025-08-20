import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test('renders hero, features, and CTA', async ({ page }) => {
    await page.goto('/');
    // Hero section (should have a heading from Hero component, fallback: Why Choose SentinelTrade?)
    await expect(
      page.getByRole('heading', { name: /Why Choose SentinelTrade\?/i })
    ).toBeVisible();
    // Feature cards
    await expect(page.getByText('Unmatched Security')).toBeVisible();
    await expect(page.getByText('Real-Time Insights')).toBeVisible();
    await expect(page.getByText('Lightning Execution')).toBeVisible();
    // CTA Button
    const ctaBtn = page.locator('#start-trading-btn');
    await expect(ctaBtn).toBeVisible();
    await expect(ctaBtn).toHaveText(/Start Trading Now/);
    // CTA links to signup
    await expect(ctaBtn.locator('a')).toHaveAttribute('href', '/signup');
  });

  test('start trading button navigates to signup', async ({ page }) => {
    await page.goto('/');
    await page.locator('#start-trading-btn').click();
    await expect(page).toHaveURL('/signup');
  });

  test('features section displays correct descriptions', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Your assets are our top priority. Our platform is built with bank-grade encryption, real-time fraud detection, and continuous compliance monitoring.')).toBeVisible();
    await expect(page.getByText('Stay ahead with live market data, customizable dashboards, and actionable analytics. Make moves with confidence—every second counts.')).toBeVisible();
    await expect(page.getByText('Our ultra-fast trade engine delivers execution at the speed of opportunity. Trade smarter—trade Sentinel.')).toBeVisible();
  });

  test('page is accessible by keyboard', async ({ page }) => {
    await page.goto('/');
    // Tab to the CTA button
    for (let i = 0; i < 10; i++) {
      await page.keyboard.press('Tab');
    }
    // Focus should eventually reach the button
    const isFocused = await page.evaluate(() => document.activeElement?.id === 'start-trading-btn');
    expect(isFocused).toBe(true);
  });
});
