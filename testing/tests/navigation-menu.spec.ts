import { test, expect } from '@playwright/test';

// Helper for menu navigation with Lucide icons and text
const navigationMenuSelectors = {
  logo: 'nav img[src="/branding/assets/logo-0.png"]',
  portfolio: 'a[href="/portfolio"]',
  loginButton: '#login-nav',
  signupButton: '#signup-nav',
  analytics: 'a[href="/performance-analytics"]',
  risk: 'a[href="/risk-assessment"]',
};

test.describe('Navigation Menu', () => {
  test('renders navigation bar with logo and main links', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator(navigationMenuSelectors.logo)).toBeVisible();
    await expect(page.getByRole('link', { name: 'Portfolio' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Trading' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Compliance' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Analytics' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Risk' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Account' })).toBeVisible();
    await expect(page.locator(navigationMenuSelectors.loginButton)).toBeVisible();
    await expect(page.locator(navigationMenuSelectors.signupButton)).toBeVisible();
  });

  test('navigates to Portfolio page when Portfolio link is clicked', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Portfolio' }).click();
    await expect(page).toHaveURL('/portfolio');
  });

  test('shows Trading dropdown and navigates to Market Data', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Trading' }).click();
    await expect(page.getByRole('link', { name: /Market Data/ })).toBeVisible();
    await page.getByRole('link', { name: /Market Data/ }).click();
    await expect(page).toHaveURL('/market-data');
  });

  test('shows Trading dropdown and navigates to Trade Execution', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Trading' }).click();
    await expect(page.getByRole('link', { name: /Trade Execution/ })).toBeVisible();
    // Trade Execution route may not be implemented, but link should work
    await page.getByRole('link', { name: /Trade Execution/ }).click();
    await expect(page).toHaveURL('/trade-execution');
  });

  test('shows Trading dropdown and navigates to Order Management', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Trading' }).click();
    await page.getByRole('link', { name: /Order Management/ }).click();
    await expect(page).toHaveURL('/order-management');
  });

  test('shows Trading dropdown and navigates to Trade Settlement', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Trading' }).click();
    await page.getByRole('link', { name: /Trade Settlement/ }).click();
    await expect(page).toHaveURL('/trade-settlement');
  });

  test('shows Compliance dropdown and links work', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Compliance' }).click();
    await expect(page.getByRole('link', { name: /KYC Verification/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Monitoring/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Regulatory Reporting/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Audit Trail/ })).toBeVisible();
    // Click KYC Verification
    await page.getByRole('link', { name: /KYC Verification/ }).click();
    await expect(page).toHaveURL('/kyc-verification');
  });

  test('shows Account dropdown and links work', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Account' }).click();
    await expect(page.getByRole('link', { name: /Overview/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Role Management/ })).toBeVisible();
    await page.getByRole('link', { name: /Overview/ }).click();
    await expect(page).toHaveURL('/account-overview');
  });

  test('navigates to Analytics and Risk pages', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Analytics' }).click();
    await expect(page).toHaveURL('/performance-analytics');
    await page.goto('/');
    await page.getByRole('link', { name: 'Risk' }).click();
    await expect(page).toHaveURL('/risk-assessment');
  });

  test('Login and Sign Up buttons navigate to correct routes', async ({ page }) => {
    await page.goto('/');
    await page.locator(navigationMenuSelectors.loginButton).click();
    await expect(page).toHaveURL('/login');
    await page.goto('/');
    await page.locator(navigationMenuSelectors.signupButton).click();
    await expect(page).toHaveURL('/signup');
  });

  test('logo click navigates to home', async ({ page }) => {
    await page.goto('/portfolio');
    await page.locator(navigationMenuSelectors.logo).click();
    await expect(page).toHaveURL('/');
  });
});
