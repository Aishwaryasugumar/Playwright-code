import { test, expect } from '@playwright/test';

test('verify Accordian', async ({ page }) => {
  await page.goto('https://www.webdriveruniversity.com/Accordion/index.html');
  await page.locator("#manual-testing-accordion").click()
  const text=await page.locator('//div[@id="manual-testing-description"]/p')
  await expect(text).toContainText('Realised')






})



