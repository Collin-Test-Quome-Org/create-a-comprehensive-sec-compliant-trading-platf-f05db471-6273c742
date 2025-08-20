import { test, expect } from '@playwright/test';

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders navigation menu items', async ({ page }) => {
    // Home link (logo)
    const logo = page.locator('nav img[src="/branding/assets/logo-0.png"]');
    await expect(logo).toBeVisible();
    // Home link (text)
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Features' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Pricing' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    // Auth buttons
    await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
  });

  test('navigation links route correctly', async ({ page }) => {
    // Click Home (text)
    await page.getByRole('link', { name: 'Home' }).click();
    await expect(page).toHaveURL('/');
    // Features
    await page.getByRole('link', { name: 'Features' }).click();
    await expect(page).toHaveURL('/features');
    // Pricing
    await page.getByRole('link', { name: 'Pricing' }).click();
    await expect(page).toHaveURL('/pricing');
    // About
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('/about');
    // Log In
    await page.getByRole('button', { name: 'Log In' }).click();
    await expect(page).toHaveURL('/login');
    // Sign Up
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL('/signup');
  });

  test('navigation bar is accessible', async ({ page }) => {
    // Navbar landmark
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    // Role navigation
    await expect(nav).toHaveAttribute('class', /border-b/);
  });
});
