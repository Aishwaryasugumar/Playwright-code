import { test, expect } from '@playwright/test';

test('verify to do list is present', async ({ page }) => {
  await page.goto('https://www.webdriveruniversity.com/');
  await page.locator("#to-do-list").click()
  //await page.getByPlaceholder("Add new todo").waitFor({state:'visible'})
  await page.waitForTimeout(2000)
  //await page.goto('https://www.webdriveruniversity.com/To-Do-List/index.html')
  //await page.getByPlaceholder("Add new todo").click()
  await page.getByPlaceholder("Add new todo").fill("hi")

    
})
test('verify Ajax loader', async ({ page }) => {
  await page.goto('https://www.webdriveruniversity.com/');
  await page.locator('//h1[contains(text(),"AJAX LOADER")]').click
  await page.locator('//p[contains(text(),"CLICK ME!")]').click()
  await page.locator('//button[contains(text(),"Close")]').click()
})
test.only('verify scroll function', async ({ page }) => {
  await page.goto('https://demo.guru99.com/test/guru99home/');
  const element=await page.locator('//i[@class="icon-coffee"]')
  await element.scrollIntoViewIfNeeded()
  //await page.waitForTimeout(2000)
  await element.click()
})