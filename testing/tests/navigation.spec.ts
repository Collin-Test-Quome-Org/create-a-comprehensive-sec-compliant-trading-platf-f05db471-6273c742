import { test, expect } from '@playwright/test';

const mainNavLinks = [
  { label: 'Market Data', path: '/market-data' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Orders', path: '/order-management' },
  { label: 'Compliance', path: '/compliance-monitoring' },
  { label: 'Audit Trail', path: '/audit-trail' },
];

const guestLinks = [
  { label: 'Login', path: '/login' },
  { label: 'Sign Up', path: '/signup' },
];

const userLinks = [
  { label: 'Account', path: '/account' },
  { label: 'Logout', path: null },
];

test.describe('Navigation Bar (Guest)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows brand logo and navigates home when clicked', async ({ page }) => {
    const logoLink = page.locator('nav a[href="/"] img');
    await expect(logoLink).toBeVisible();
    await page.locator('nav a[href="/"]').click();
    await expect(page).toHaveURL('/');
  });

  for (const nav of mainNavLinks) {
    test(`shows "${nav.label}" link and navigates to ${nav.path}`, async ({ page }) => {
      const link = page.getByRole('link', { name: nav.label });
      await expect(link).toBeVisible();
      await link.click();
      await expect(page).toHaveURL(nav.path);
    });
  }

  for (const nav of guestLinks) {
    test(`shows "${nav.label}" link and navigates to ${nav.path}`, async ({ page }) => {
      const link = page.getByRole('link', { name: nav.label });
      await expect(link).toBeVisible();
      await link.click();
      await expect(page).toHaveURL(nav.path);
    });
  }

  test('does not show Account or Logout when not authenticated', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Account' })).toHaveCount(0);
    await expect(page.locator('#nav-logout')).toHaveCount(0);
  });

  test('active home link is highlighted when on /', async ({ page }) => {
    const homeNav = page.locator('nav a[href="/"]').first();
    await expect(homeNav).toHaveClass(/bg-blue-50/);
    await expect(homeNav).toHaveClass(/text-blue-700/);
  });
});

test.describe('Navigation Bar (Authenticated)', () => {
  test.beforeEach(async ({ page }) => {
    // Mock authentication: set localStorage or use a test route if available
    await page.addInitScript(() => {
      window.localStorage.setItem('auth-user', JSON.stringify({ id: 1, username: 'demo' }));
    });
    await page.goto('/');
  });

  for (const nav of mainNavLinks) {
    test(`shows "${nav.label}" link and navigates to ${nav.path} (auth)`, async ({ page }) => {
      const link = page.getByRole('link', { name: nav.label });
      await expect(link).toBeVisible();
      await link.click();
      await expect(page).toHaveURL(nav.path);
    });
  }

  test('shows Account and Logout, hides Login/Sign Up when authenticated', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Account' })).toBeVisible();
    await expect(page.locator('#nav-logout')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Login' })).toHaveCount(0);
    await expect(page.getByRole('link', { name: 'Sign Up' })).toHaveCount(0);
  });

  test('Account link navigates to /account', async ({ page }) => {
    const accountLink = page.getByRole('link', { name: 'Account' });
    await accountLink.click();
    await expect(page).toHaveURL('/account');
  });

  test('Logout button triggers logout and shows guest links', async ({ page }) => {
    await page.locator('#nav-logout').click();
    // Simulate AuthContext logout: page should now show Login/Sign Up
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Account' })).toHaveCount(0);
    await expect(page.locator('#nav-logout')).toHaveCount(0);
  });
});
