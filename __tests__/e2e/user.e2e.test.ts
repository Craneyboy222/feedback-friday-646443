import { test, expect } from '@playwright/test';

test.describe('User Management E2E Tests', () => {
  test('user profile management', async ({ page }) => {
    await page.goto('/login');
    await page.fill('[data-testid=email]', 'test@example.com');
    await page.fill('[data-testid=password]', 'password123');
    await page.click('[data-testid=login-button]');

    await page.goto('/profile');
    await page.fill('[data-testid=name]', 'Updated Name');
    await page.click('[data-testid=save-button]');
    await expect(page.locator('[data-testid=success-message]')).toBeVisible();
  });
});