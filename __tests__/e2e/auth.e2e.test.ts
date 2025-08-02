import { test, expect } from '@playwright/test';

test.describe('Authentication E2E Tests', () => {
  test('complete registration and login flow', async ({ page }) => {
    await page.goto('/register');
    await page.fill('[data-testid=email]', 'test@example.com');
    await page.fill('[data-testid=password]', 'password123');
    await page.fill('[data-testid=confirm-password]', 'password123');
    await page.click('[data-testid=register-button]');
    await expect(page).toHaveURL('/dashboard');

    await page.goto('/logout');
    await expect(page).toHaveURL('/login');
  });
});