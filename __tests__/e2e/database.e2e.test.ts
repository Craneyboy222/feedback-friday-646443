import { chromium } from 'playwright';

let browser;

beforeAll(async () => {
  browser = await chromium.launch();
});

describe('End-to-End Tests', () => {
  it('should complete the feedback thread creation flow', async () => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('http://localhost:3000');

    await page.click('text=Create Feedback Thread');
    await page.fill('input[name="company_name"]', 'Test Company');
    await page.fill('input[name="url"]', 'http://testcompany.com');
    await page.click('text=Submit');

    const successMessage = await page.textContent('.success-message');
    expect(successMessage).toContain('Feedback thread created successfully');

    await context.close();
  });
});

afterAll(async () => {
  await browser.close();
});