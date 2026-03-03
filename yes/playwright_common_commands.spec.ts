import { test, expect } from '@playwright/test';

test('verify Google page title is present', async ({ page }) => {
  await page.goto('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
  // using id locator
  //await page.selectOption("#dropdowm-menu-1",'SQL')
//using class locator
await page.selectOption(".dropdown-menu-lists",'Python')
await page.locator('//*[@value="option-1"]').click()
await page.locator('//*[@value="option-4"]').click()
await expect(page.locator('//*[@value="option-4"]')).toBeChecked()
await expect(page.locator('//*[@value="pumpkin"]')).toBeChecked()
await expect(page.locator('//*[@value="cabbage"]')).toBeDisabled()







})