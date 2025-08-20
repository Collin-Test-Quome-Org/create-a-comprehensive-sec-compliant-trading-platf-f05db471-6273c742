// LandingPage component tests
import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays main heading and hero section', async ({ page }) => {
    await expect(page.getByText('Why Choose SentinelTrade?')).toBeVisible();
    // The hero section is rendered above (let's check for a container with min-h-screen and the Hero)
    // We can check for the presence of the main element
    await expect(page.locator('main')).toBeVisible();
  });

  test('shows all three feature cards with headings', async ({ page }) => {
    await expect(page.getByText('Unmatched Security')).toBeVisible();
    await expect(page.getByText('Real-Time Insights')).toBeVisible();
    await expect(page.getByText('Lightning Execution')).toBeVisible();
  });

  test('feature card descriptions are present', async ({ page }) => {
    await expect(page.getByText(/bank-grade encryption/)).toBeVisible();
    await expect(page.getByText(/live market data, customizable dashboards/)).toBeVisible();
    await expect(page.getByText(/ultra-fast trade engine/)).toBeVisible();
  });

  test('Start Trading Now button is visible and navigates to signup', async ({ page }) => {
    const button = page.getByRole('link', { name: 'Start Trading Now' });
    await expect(button).toBeVisible();
    await button.click();
    await expect(page).toHaveURL('/signup');
  });

  test('Start Trading Now button has correct styling', async ({ page }) => {
    // Should have bg-blue-700, text-white, font-bold, shadow-lg
    const btn = page.locator('#start-trading-btn');
    await expect(btn).toHaveClass(/bg-blue-700/);
    await expect(btn).toHaveClass(/text-white/);
    await expect(btn).toHaveClass(/font-bold/);
    await expect(btn).toHaveClass(/shadow-lg/);
  });

  test('page is accessible with main and heading', async ({ page }) => {
    // Check that there is a main landmark and heading present
    await expect(page.locator('main')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Why Choose SentinelTrade?' })).toBeVisible();
  });
});
