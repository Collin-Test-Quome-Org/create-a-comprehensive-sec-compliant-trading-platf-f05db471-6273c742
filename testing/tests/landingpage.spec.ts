import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays hero section and main headline', async ({ page }) => {
    // The Hero component (just check the main section is present)
    await expect(page.locator('main')).toBeVisible();
    // Headline
    await expect(page.getByRole('heading', { name: 'Why Choose SentinelTrade?' })).toBeVisible();
  });

  test('renders all feature cards with correct titles and descriptions', async ({ page }) => {
    // There are 3 feature cards in a grid
    const cards = page.locator('section .grid > div');
    await expect(cards).toHaveCount(3);
    await expect(cards.nth(0)).toContainText('Unmatched Security');
    await expect(cards.nth(0)).toContainText('bank-grade encryption');
    await expect(cards.nth(1)).toContainText('Real-Time Insights');
    await expect(cards.nth(1)).toContainText('live market data');
    await expect(cards.nth(2)).toContainText('Lightning Execution');
    await expect(cards.nth(2)).toContainText('ultra-fast trade engine');
  });

  test('renders feature SVG icons in each card', async ({ page }) => {
    const cardSvgs = page.locator('section .grid > div svg');
    await expect(cardSvgs).toHaveCount(3);
  });

  test('renders and navigates with the "Start Trading Now" button', async ({ page }) => {
    const startBtn = page.locator('#start-trading-btn');
    await expect(startBtn).toBeVisible();
    await expect(startBtn).toContainText('Start Trading Now');
    await startBtn.click();
    await expect(page).toHaveURL(/\/signup$/);
  });

  test('basic accessibility: all headings and buttons have correct roles', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Why Choose SentinelTrade?' })).toBeVisible();
    await expect(page.getByRole('button', { name: /Start Trading Now/i })).toBeVisible();
  });
});
