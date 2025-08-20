// Playwright tests for LandingPage
import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test('displays hero section and brand headline', async ({ page }) => {
    await page.goto('/');
    // Hero section background image
    const heroSection = page.locator('main').locator('img[src^="/branding/assets/hero-0.png"], div[style*="hero-0.png"]');
    // Allow for either <img> or background div usage
    await expect(heroSection.first()).toBeVisible({ timeout: 2000 });
    // Headline in features section
    await expect(page.getByRole('heading', { name: /Why Choose SentinelTrade/ })).toBeVisible();
  });

  test('displays three feature cards with correct headings', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /Unmatched Security/ })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Real-Time Insights/ })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Lightning Execution/ })).toBeVisible();
  });

  test('feature cards contain expected descriptions', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/bank-grade encryption, real-time fraud detection, and continuous compliance monitoring/i)).toBeVisible();
    await expect(page.getByText(/live market data, customizable dashboards, and actionable analytics/i)).toBeVisible();
    await expect(page.getByText(/ultra-fast trade engine delivers execution at the speed of opportunity/i)).toBeVisible();
  });

  test('Start Trading Now button navigates to signup', async ({ page }) => {
    await page.goto('/');
    const btn = page.locator('#start-trading-btn');
    await expect(btn).toBeVisible();
    await btn.click();
    await expect(page).toHaveURL('/signup');
  });

  test('accessibility: main sections have proper roles', async ({ page }) => {
    await page.goto('/');
    // There should be a main landmark
    await expect(page.locator('main')).toBeVisible();
    // Section with Why Choose SentinelTrade?
    await expect(page.getByRole('heading', { name: /Why Choose SentinelTrade/ })).toBeVisible();
  });
});
