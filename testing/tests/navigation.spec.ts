// tests for Navigation component and top navigation bar
import { test, expect } from '@playwright/test';

const navLinks = [
  { id: 'nav-market-data', text: 'Market Data', path: '/market-data' },
  { id: 'nav-portfolio', text: 'Portfolio', path: '/portfolio' },
  { id: 'nav-trade-execution', text: 'Trade', path: '/trade-execution' },
  { id: 'nav-compliance', text: 'Compliance', path: '/compliance-monitoring' },
  { id: 'nav-account', text: 'Account', path: '/account' },
];

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows logo and all navigation links', async ({ page }) => {
    // Logo should be present
    const logo = page.locator('img[src="/branding/assets/logo-0.png"]');
    await expect(logo).toBeVisible();
    // All nav links
    for (const link of navLinks) {
      const nav = page.getByRole('link').filter({ hasText: link.text });
      await expect(nav).toBeVisible();
    }
    // Login and Sign Up buttons
    await expect(page.locator('#nav-login-btn')).toBeVisible();
    await expect(page.locator('#nav-signup-btn')).toBeVisible();
  });

  for (const link of navLinks) {
    test(`navigates to ${link.text} when clicking nav link`, async ({ page }) => {
      const nav = page.locator(`#${link.id}`);
      await nav.click();
      // Expect URL to change
      await expect(page).toHaveURL(link.path);
    });
  }

  test('clicking logo navigates to home page', async ({ page }) => {
    await page.locator('img[src="/branding/assets/logo-0.png"]').click();
    await expect(page).toHaveURL('/');
  });

  test('Login button navigates to /login', async ({ page }) => {
    await page.locator('#nav-login-btn').click();
    await expect(page).toHaveURL('/login');
  });

  test('Sign Up button navigates to /signup', async ({ page }) => {
    await page.locator('#nav-signup-btn').click();
    await expect(page).toHaveURL('/signup');
  });

  test('Navigation bar is accessible by role navigation', async ({ page }) => {
    const nav = page.getByRole('navigation');
    await expect(nav).toBeVisible();
  });

  test('Navigation links have appropriate roles and are keyboard accessible', async ({ page }) => {
    // Tab to first nav link
    await page.keyboard.press('Tab'); // logo link
    await expect(page.locator('img[src="/branding/assets/logo-0.png"]').first()).toBeFocused();
    for (const link of navLinks) {
      await page.keyboard.press('Tab');
      const nav = page.locator(`#${link.id}`);
      await expect(nav).toBeFocused();
    }
    await page.keyboard.press('Tab'); // Login
    await expect(page.locator('#nav-login-btn')).toBeFocused();
    await page.keyboard.press('Tab'); // Sign Up
    await expect(page.locator('#nav-signup-btn')).toBeFocused();
  });
});
