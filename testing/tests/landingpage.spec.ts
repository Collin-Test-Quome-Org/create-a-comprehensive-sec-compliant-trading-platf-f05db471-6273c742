import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero section', async ({ page }) => {
    // Hero may have heading, button, etc
    // Check presence of heading in Hero (not from features)
    const heroHeading = page.locator('main h1');
    await expect(heroHeading.first()).toBeVisible();
  });

  test('renders Why Choose SentinelTrade section and its features', async ({ page }) => {
    const sectionHeading = page.locator('h2', { hasText: 'Why Choose SentinelTrade?' });
    await expect(sectionHeading).toBeVisible();
    // There are 3 feature cards
    const features = [
      'Unmatched Security',
      'Real-Time Insights',
      'Lightning Execution'
    ];
    for (const feature of features) {
      const cardHeading = page.locator('h3', { hasText: feature });
      await expect(cardHeading).toBeVisible();
      // Each card should have a paragraph
      const cardParent = cardHeading.locator('..');
      const paragraph = cardParent.locator('p');
      await expect(paragraph).toBeVisible();
    }
  });

  test('Start Trading Now button links to /signup', async ({ page }) => {
    const button = page.locator('#start-trading-btn');
    await expect(button).toBeVisible();
    const link = button.locator('a');
    await expect(link).toHaveAttribute('href', '/signup');
    // Clicking navigates to signup
    await link.click();
    await expect(page).toHaveURL('/signup');
  });

  test('feature cards have correct icons (SVGs present)', async ({ page }) => {
    // There are 3 svg icons in .border-t-4.border-blue-700 divs
    const cards = page.locator('.border-t-4.border-blue-700');
    await expect(cards).toHaveCount(3);
    for (let i = 0; i < 3; i++) {
      const svg = cards.nth(i).locator('svg');
      await expect(svg).toBeVisible();
      // Check basic properties
      await expect(svg).toHaveAttribute('width', '28');
      await expect(svg).toHaveAttribute('height', '28');
    }
  });

  test('basic accessibility: headings and links are visible', async ({ page }) => {
    // Heading
    await expect(page.getByRole('heading', { name: /SentinelTrade/ })).toBeVisible();
    // All links in landing page
    const links = page.locator('a');
    const count = await links.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      await expect(links.nth(i)).toHaveAttribute('href', /\//);
    }
  });
});
