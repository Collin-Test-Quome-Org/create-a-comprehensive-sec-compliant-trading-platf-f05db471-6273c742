import { test, expect } from '@playwright/test';

// Helper for navigation links
const navLinks = [
  { label: 'Market Data', path: '/market-data', icon: 'BarChart3' },
  { label: 'Portfolio', path: '/portfolio', icon: 'PieChart' },
  { label: 'Orders', path: '/order-management', icon: 'ListChecks' },
  { label: 'Compliance', path: '/compliance-monitoring', icon: 'Shield' },
  { label: 'Audit Trail', path: '/audit-trail', icon: 'BookText' },
];

const authNavLinks = [
  { label: 'Account', path: '/account', icon: 'Users' },
  { label: 'Logout', path: null, icon: 'LogOut', id: 'nav-logout' },
];

const guestNavLinks = [
  { label: 'Login', path: '/login', icon: 'LogIn' },
  { label: 'Sign Up', path: '/signup', icon: 'UserPlus' },
];

test.describe('Navigation Bar', () => {
  test('shows logo as home link and highlights it on home', async ({ page }) => {
    await page.goto('/');
    // Logo should be a link to home
    const logoLink = page.locator('nav a').first();
    await expect(logoLink).toHaveAttribute('href', '/');
    // Logo image exists
    await expect(logoLink.locator('img[src="/branding/assets/logo-0.png"]')).toBeVisible();
    // Home nav item should be highlighted
    await expect(logoLink).toHaveClass(/bg-blue-50/);
  });

  test('renders main navigation links', async ({ page }) => {
    await page.goto('/');
    for (const link of navLinks) {
      const navItem = page.getByRole('link', { name: link.label });
      await expect(navItem).toBeVisible();
      await expect(navItem).toHaveAttribute('href', link.path);
    }
  });

  test('renders guest links when not logged in', async ({ page }) => {
    await page.goto('/');
    for (const link of guestNavLinks) {
      const navItem = page.getByRole('link', { name: link.label });
      await expect(navItem).toBeVisible();
      if (link.path) {
        await expect(navItem).toHaveAttribute('href', link.path);
      }
    }
    // Should not see Account or Logout
    await expect(page.getByRole('link', { name: 'Account' })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Logout' })).toHaveCount(0);
  });

  test('renders user links when logged in', async ({ page, context }) => {
    // Simulate login by setting user in localStorage before page load
    await context.addInitScript(() => {
      localStorage.setItem('auth', JSON.stringify({ user: { id: 1, name: 'Test User' } }));
    });
    await page.goto('/');
    // Account link
    const accountLink = page.getByRole('link', { name: 'Account' });
    await expect(accountLink).toBeVisible();
    await expect(accountLink).toHaveAttribute('href', '/account');
    // Logout button
    const logoutBtn = page.locator('#nav-logout');
    await expect(logoutBtn).toBeVisible();
    await expect(logoutBtn).toHaveText(/Logout/);
    // Should not see Login/Sign Up
    await expect(page.getByRole('link', { name: 'Login' })).toHaveCount(0);
    await expect(page.getByRole('link', { name: 'Sign Up' })).toHaveCount(0);
  });

  test('navigates correctly when clicking navigation links', async ({ page }) => {
    await page.goto('/');
    for (const link of navLinks) {
      await page.getByRole('link', { name: link.label }).click();
      await expect(page).toHaveURL(link.path);
      // Navigation bar remains visible
      await expect(page.locator('nav')).toBeVisible();
    }
  });

  test('navigates to login and signup from navigation', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Login' }).click();
    await expect(page).toHaveURL('/login');
    await page.goto('/');
    await page.getByRole('link', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL('/signup');
  });

  test('logout button calls logout and returns to guest links', async ({ page, context }) => {
    // Simulate login by setting user in localStorage before page load
    await context.addInitScript(() => {
      localStorage.setItem('auth', JSON.stringify({ user: { id: 2, name: 'Demo User' } }));
    });
    await page.goto('/');
    await expect(page.getByRole('link', { name: 'Account' })).toBeVisible();
    await page.locator('#nav-logout').click();
    // After logout, guest links should appear
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
  });

  test('navigation is accessible by keyboard', async ({ page }) => {
    await page.goto('/');
    // Tab to Market Data
    await page.keyboard.press('Tab'); // logo
    await page.keyboard.press('Tab'); // Market Data
    const focused = await page.evaluate(() => document.activeElement?.textContent);
    expect(focused).toMatch(/Market Data/);
  });
});
