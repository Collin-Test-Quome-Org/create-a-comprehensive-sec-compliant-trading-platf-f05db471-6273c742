// Playwright tests for Navigation component
import { test, expect } from '@playwright/test';

const navLinks = [
  { label: 'Market Data', path: '/market-data', id: 'navlink-marketdata' },
  { label: 'Portfolio', path: '/portfolio', id: 'navlink-portfolio' },
  { label: 'Order Management', path: '/order-management', id: 'navlink-ordermanagement' },
  { label: 'Compliance', path: '/compliance-monitoring', id: 'navlink-compliance' },
  { label: 'Analytics', path: '/performance-analytics', id: 'navlink-analytics' },
  { label: 'Audit Trail', path: '/audit-trail', id: 'navlink-audittrail' }
];

const authLinks = [
  { label: 'Login', path: '/login', id: 'navlink-login' },
  { label: 'Sign Up', path: '/signup', id: 'navlink-sign up' }
];

test.describe('Navigation Bar', () => {
  test('renders logo and brand name', async ({ page }) => {
    await page.goto('/');
    const logo = page.locator('img[src="/branding/assets/logo-0.png"]');
    await expect(logo).toBeVisible();
    const brandName = page.locator('text=TradeGuard');
    await expect(brandName).toBeVisible();
  });

  test('renders all navigation links (desktop)', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.goto('/');
    for (const link of navLinks) {
      const navLink = page.locator(`#${link.id}`);
      await expect(navLink).toBeVisible();
      await expect(navLink).toHaveText(link.label);
    }
    for (const link of authLinks) {
      const authLink = page.locator(`#navlink-${link.label.toLowerCase()}`);
      await expect(authLink).toBeVisible();
      await expect(authLink).toHaveText(link.label);
    }
  });

  test('navigation links highlight when active', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 });
    for (const link of navLinks) {
      await page.goto(link.path);
      const navLink = page.locator(`#${link.id}`);
      await expect(navLink).toHaveClass(/bg-blue-100/);
      await expect(navLink).toHaveClass(/text-\[#1d4ed8\]/);
    }
    for (const link of authLinks) {
      await page.goto(link.path);
      const authLink = page.locator(`#navlink-${link.label.toLowerCase()}`);
      await expect(authLink).toHaveClass(/bg-blue-100/);
    }
  });

  test('logo link navigates to home', async ({ page }) => {
    await page.goto('/portfolio');
    await page.click('img[src="/branding/assets/logo-0.png"]');
    await expect(page).toHaveURL('/');
  });

  test('brand name is not visible on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto('/');
    const brandName = page.locator('text=TradeGuard');
    await expect(brandName).toBeHidden();
  });
});
