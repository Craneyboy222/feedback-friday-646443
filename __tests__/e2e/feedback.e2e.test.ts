import { test, expect } from '@playwright/test';

test.describe('Feedback System E2E Tests', () => {
  test('user can submit feedback', async ({ page }) => {
    await page.goto('/login');
    await page.fill('[data-testid=email]', 'test@example.com');
    await page.fill('[data-testid=password]', 'password123');
    await page.click('[data-testid=login-button]');

    await page.goto('/feedback/create');
    await page.fill('[data-testid=company-name]', 'Example Inc.');
    await page.fill('[data-testid=url]', 'https://example.com');
    await page.fill('[data-testid=purpose]', 'Get user feedback');
    await page.click('[data-testid=submit-feedback-button]');
    await expect(page.locator('[data-testid=success-message]')).toBeVisible();
  });
});