import { test, expect } from '@playwright/test';

// Navigation Bar Tests

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders all navigation links and buttons', async ({ page }) => {
    // Logo
    const logo = page.locator('nav img[src="/branding/assets/logo-0.png"]');
    await expect(logo).toBeVisible();

    // Navigation links by their IDs
    await expect(page.getByRole('link', { name: 'Market Data' })).toBeVisible();
    await expect(page.locator('#nav-market-data')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Portfolio' })).toBeVisible();
    await expect(page.locator('#nav-portfolio')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Trade' })).toBeVisible();
    await expect(page.locator('#nav-trade-execution')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Compliance' })).toBeVisible();
    await expect(page.locator('#nav-compliance')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Account' })).toBeVisible();
    await expect(page.locator('#nav-account')).toBeVisible();

    // Login and Sign Up buttons
    await expect(page.locator('#nav-login-btn')).toBeVisible();
    await expect(page.locator('#nav-signup-btn')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
  });

  test('navigates to correct pages on nav link click', async ({ page }) => {
    // Market Data
    await page.click('#nav-market-data');
    await expect(page).toHaveURL(/\/market-data$/);
    // Portfolio
    await page.click('nav'); // Ensure nav is focused
    await page.click('#nav-portfolio');
    await expect(page).toHaveURL(/\/portfolio$/);
    // Trade (should go to /trade-execution)
    await page.click('nav');
    await page.click('#nav-trade-execution');
    await expect(page).toHaveURL(/\/trade-execution$/);
    // Compliance
    await page.click('nav');
    await page.click('#nav-compliance');
    await expect(page).toHaveURL(/\/compliance-monitoring$/);
    // Account
    await page.click('nav');
    await page.click('#nav-account');
    await expect(page).toHaveURL(/\/account$/);
    // Logo (home)
    await page.click('nav img[src="/branding/assets/logo-0.png"]');
    await expect(page).toHaveURL('/');
  });

  test('login and sign up buttons navigate to correct pages', async ({ page }) => {
    await page.click('#nav-login-btn');
    await expect(page).toHaveURL(/\/login$/);
    await page.goto('/');
    await page.click('#nav-signup-btn');
    await expect(page).toHaveURL(/\/signup$/);
  });

  test('navigation is accessible by keyboard', async ({ page }) => {
    // Tab through nav links and expect focus to be visible
    await page.keyboard.press('Tab'); // Logo link
    await expect(page.locator('nav a').first()).toBeFocused();
    for (const id of ['#nav-market-data', '#nav-portfolio', '#nav-trade-execution', '#nav-compliance', '#nav-account']) {
      await page.keyboard.press('Tab');
      await expect(page.locator(id)).toBeFocused();
    }
    // Login and signup buttons
    await page.keyboard.press('Tab');
    await expect(page.locator('#nav-login-btn')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.locator('#nav-signup-btn')).toBeFocused();
  });
});
