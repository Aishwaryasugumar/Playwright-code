import { test, expect } from '@playwright/test';
import path from 'path';
test('verify fileupload', async ({ page }) => {
  await page.goto('https://www.webdriveruniversity.com/File-Upload/index.html');
  const filepath=path.resolve('C:/Users/Aishwarya/Downloads/hi.txt')
  await page.setInputFiles('#myFile',filepath)
  await page.waitForTimeout(2000)
  await page.locator('//input[@type="submit"]').click()
  await page.waitForTimeout(2000)
})
test.only('Date picker', async ({ page }) => {
  await page.goto('https://www.webdriveruniversity.com/Datepicker/index.html');
  await page.locator('//input[@class="form-control"]').click() 
  await page.locator("//td[text()='18']").click()
  await page.waitForTimeout(2000)
})