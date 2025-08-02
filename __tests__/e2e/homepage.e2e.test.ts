import { test, expect } from '@playwright/test';

test.describe('Homepage E2E Tests', () => {
  test('homepage loads correctly', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Welcome');
    await expect(page.locator('[data-testid=main-navigation]')).toBeVisible();
  });

  test('responsive design', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('[data-testid=mobile-menu]')).toBeVisible();
  });
});