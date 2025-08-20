import { test, expect } from '@playwright/test';

// All navigation routes from the Navigation component
const navRoutes = [
  {
    label: 'Market Data',
    path: '/market-data',
    icon: 'LineChart',
  },
  {
    label: 'Portfolio',
    path: '/portfolio',
    icon: 'FileBarChart2',
  },
  {
    label: 'Compliance',
    path: '/compliance-monitoring',
    icon: 'ShieldCheck',
  },
  {
    label: 'Account',
    path: '/account',
    icon: 'User',
  },
];

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows logo and app name', async ({ page }) => {
    // The logo is present (image)
    await expect(page.locator('nav img')).toBeVisible();
    // The app name is visible
    await expect(page.getByText('Sentinel Markets')).toBeVisible();
  });

  test('clicking logo or app name navigates to home', async ({ page }) => {
    // Navigate away first
    await page.goto('/market-data');
    // Click logo container
    await page.locator('nav .flex.items-center.gap-3').first().click();
    await expect(page).toHaveURL('/');
    // Also try clicking the text
    await page.goto('/portfolio');
    await page.getByText('Sentinel Markets').click();
    await expect(page).toHaveURL('/');
  });

  test('navigation menu items are visible', async ({ page }) => {
    for (const { label } of navRoutes) {
      await expect(page.getByRole('link', { name: new RegExp(label, 'i') })).toBeVisible();
    }
  });

  for (const nav of navRoutes) {
    test(`navigates to ${nav.label} page on menu click`, async ({ page }) => {
      await page.getByRole('link', { name: new RegExp(nav.label, 'i') }).click();
      // Accept both /compliance-monitoring and /account even if page is blank
      await expect(page).toHaveURL(nav.path);
    });
  }

  test('navigation is keyboard accessible', async ({ page }) => {
    // Focus the first menu item, press Tab to cycle through
    await page.keyboard.press('Tab'); // logo
    await page.keyboard.press('Tab'); // first nav menu link
    const firstNav = await page.getByRole('link', { name: /Market Data/i });
    await expect(firstNav).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: /Portfolio/i })).toBeFocused();
  });
});
