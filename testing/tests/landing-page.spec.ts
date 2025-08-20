import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero section', async ({ page }) => {
    // The Hero component is included at the top of the landing page
    // Check for presence of at least one large heading or hero image
    const heroSection = page.locator('main .min-h-screen');
    await expect(heroSection).toBeVisible();
  });

  test('renders features section with all feature cards', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Why Choose SentinelTrade?' })).toBeVisible();
    // Feature card titles
    await expect(page.getByRole('heading', { name: 'Unmatched Security' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Real-Time Insights' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Lightning Execution' })).toBeVisible();
    // Feature descriptions
    await expect(page.getByText('Your assets are our top priority. Our platform is built with bank-grade encryption, real-time fraud detection, and continuous compliance monitoring.')).toBeVisible();
    await expect(page.getByText('Stay ahead with live market data, customizable dashboards, and actionable analytics. Make moves with confidence—every second counts.')).toBeVisible();
    await expect(page.getByText('Our ultra-fast trade engine delivers execution at the speed of opportunity. Trade smarter—trade Sentinel.')).toBeVisible();
  });

  test('renders and interacts with Start Trading Now button', async ({ page }) => {
    const startBtn = page.getByRole('button', { name: 'Start Trading Now' });
    await expect(startBtn).toBeVisible();
    await startBtn.click();
    await expect(page).toHaveURL('/signup');
  });

  test('landing page has accessible headings and buttons', async ({ page }) => {
    // Top-level heading
    await expect(page.getByRole('heading', { name: /SentinelTrade/i })).toBeVisible();
    // All feature headings have semantic roles
    await expect(page.getByRole('heading', { name: 'Unmatched Security' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Real-Time Insights' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Lightning Execution' })).toBeVisible();
    // All buttons have roles
    await expect(page.getByRole('button', { name: /Trading Now/i })).toBeVisible();
  });
});
