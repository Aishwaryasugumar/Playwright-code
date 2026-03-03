import { test, expect } from '@playwright/test';
test('verify page title is present', async ({ page,context }) => {
await page.goto('https://www.webdriveruniversity.com/');
const contact=await page.locator('//h1[contains(text(),"CONTACT US")]')
const existpage=context.waitForEvent('page')
await contact.click({ modifiers: ['ControlOrMeta'] })
const newpage=await existpage
await newpage.waitForLoadState();
await newpage.bringToFront();
await newpage.getByPlaceholder("First Name").fill("Aishwarya")
await newpage.getByPlaceholder("Last Name").fill("harshu")
await newpage.getByPlaceholder("Email Address").fill("abc@gmail.com")
await newpage.getByPlaceholder("Comments").fill("done")
await newpage.locator('//input[@type="submit"]').click()












})