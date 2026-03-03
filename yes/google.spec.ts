import { test, expect } from '@playwright/test';

test('verify Google page title is present', async ({ page }) => {
  await page.goto('https://www.google.com/');

  // Expect a title "to contain" a substring.
 await expect(page).toHaveTitle(/Google/)
  await page.locator('//textarea[@name="q"]').fill("hi")
  
});