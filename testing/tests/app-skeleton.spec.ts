import { test, expect } from '@playwright/test';

test.describe('App Skeleton Loader', () => {
  test('displays skeleton loader on initial app load', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'We are building your app...' })).toBeVisible();
    // Skeleton elements should be visible
    const skeletons = page.locator('.animate-pulse .rounded-xl');
    await expect(skeletons).toBeVisible();
    await expect(page.getByText('Just a moment. You should see updates shortly.')).toBeVisible();
  });

  test('has accessible structure on loader page', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'We are building your app...' })).toBeVisible();
    // The loading skeletons are present, ensure the aria-live region is not required for static loader
  });
});
