import { test, expect } from '@playwright/test';

test('verify iframe', async ({ page }) => {
  await page.goto('https://demo.guru99.com/test/guru99home/');
  await page.frameLocator("#a077aa5e").locator('//body/a').click()
  await page.waitForTimeout(2000)
})
test('verify iframe3', async ({ page }) => {
  await page.goto('https://demo.guru99.com/test/guru99home/');
  //await page.frameLocator("#200_287_html_inpage_0.if").locator('//body/div[@id="container"]')
  const frame= page.frameLocator('iframe[wmode="transparent"]')
  await frame.locator('//body/div[@id="player"]').click()
  await page.waitForTimeout(2000)
})
test('verify iframe4', async ({ page }) => {
  await page.goto('https://demoqa.com/frames');
  //await page.frameLocator("#200_287_html_inpage_0.if").locator('//body/div[@id="container"]')
  const frame= page.frameLocator('iframe[name="aswift_0"]')
  await frame.locator('//body').click()
  await page.waitForTimeout(2000)
})
test('verify iframenew', async ({ page }) => {
  await page.goto('https://www.webdriveruniversity.com/IFrame/index.html');
  const frame=page.frameLocator("#frame")
   for(let i=1;i<=5;i++)
   {
  await frame.locator('//a[@class="right carousel-control"]/span').click()
  await page.waitForTimeout(500) 
   }
})
test.only('verify iframepractice', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/iframe?utm_source=chatgpt.com');
  const frame=page.frameLocator("#iframe-youtube")
  await frame.locator('//button[@aria-label="Play"]').click()
  await page.waitForTimeout(2000)

})

