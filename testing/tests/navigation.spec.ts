import { test, expect } from '@playwright/test';

const navLinks = [
  { label: 'Market Data', path: '/market-data', id: 'navlink-marketdata' },
  { label: 'Portfolio', path: '/portfolio', id: 'navlink-portfolio' },
  { label: 'Order Management', path: '/order-management', id: 'navlink-ordermanagement' }
];

const authLinks = [
  { label: 'Login', path: '/login', id: 'navlink-login' },
  { label: 'Sign Up', path: '/signup', id: 'navlink-sign up' }
];

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders logo and brand text with correct styles', async ({ page }) => {
    const logo = page.locator('nav img[src="/branding/assets/logo-0.png"]');
    await expect(logo).toBeVisible();
    const brand = page.locator('span', { hasText: 'TradeSecure' });
    await expect(brand).toBeVisible();
    await expect(brand).toHaveClass(/text-2xl/);
    await expect(brand).toHaveText('TradeSecure');
  });

  test('renders all navigation links in desktop view', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    for (const link of navLinks) {
      const navLink = page.locator(`#${link.id}`);
      await expect(navLink).toBeVisible();
      await expect(navLink).toHaveText(link.label);
    }
  });

  test('renders auth links (Login, Sign Up)', async ({ page }) => {
    for (const link of authLinks) {
      // ID is navlink-login or navlink-signup (no space)
      const id = link.id === 'navlink-sign up' ? 'navlink-signup' : link.id;
      const navLink = page.locator(`#${id}`);
      await expect(navLink).toBeVisible();
      await expect(navLink).toHaveText(link.label);
    }
  });

  test('navigates to page when clicking nav links', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    for (const link of navLinks) {
      const navLink = page.locator(`#${link.id}`);
      await navLink.click();
      await expect(page).toHaveURL(link.path);
      // Optionally check active style
      await expect(navLink).toHaveClass(/bg-blue-100/);
      // Navigate back to home for next test
      await page.goto('/');
    }
  });

  test('navigates to Login and Sign Up pages from auth links', async ({ page }) => {
    for (const link of authLinks) {
      const id = link.id === 'navlink-sign up' ? 'navlink-signup' : link.id;
      const navLink = page.locator(`#${id}`);
      await navLink.click();
      await expect(page).toHaveURL(link.path);
      await page.goto('/');
    }
  });

  test('logo click navigates to home', async ({ page }) => {
    await page.goto('/portfolio');
    const logo = page.locator('nav img[src="/branding/assets/logo-0.png"]');
    await logo.click();
    await expect(page).toHaveURL('/');
  });

  test('active nav link is highlighted on respective page', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    for (const link of navLinks) {
      await page.goto(link.path);
      const navLink = page.locator(`#${link.id}`);
      await expect(navLink).toHaveClass(/bg-blue-100/);
    }
    for (const link of authLinks) {
      const id = link.id === 'navlink-sign up' ? 'navlink-signup' : link.id;
      await page.goto(link.path);
      const navLink = page.locator(`#${id}`);
      await expect(navLink).toHaveClass(/bg-blue-100/);
    }
  });

  test('navigation is accessible (nav landmark, links have role/link)', async ({ page }) => {
    // nav landmark
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    // All nav links should be role link
    const links = page.locator('nav a');
    const count = await links.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      await expect(links.nth(i)).toHaveAttribute('href', /\//);
    }
  });
});
