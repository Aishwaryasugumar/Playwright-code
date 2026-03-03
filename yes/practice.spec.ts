import { test, expect } from '@playwright/test';

test('To login to orangehrm application', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Expect a title "to contain" a substring.
 await expect(page).toHaveTitle(/OrangeHRM/)
  //await page.locator('//*[@name="username"]').fill("Admin")
  //await page.getByRole('textbox',{name:"username"}).fill("Admin")
  await page.getByPlaceholder("Username").fill("Admin")
  await page.locator('//*[@name="password"]').fill("admin123")
  await page.locator('//*[@type="submit"]').click()
  
});