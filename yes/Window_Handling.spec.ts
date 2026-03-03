import { test, expect } from '@playwright/test';
test('verify page title is present', async ({ page,context }) => {
await page.goto('https://www.bstackdemo.com/');
const ordersLink = await page.getByRole('link', { name: 'Orders' });
// wait for the new page event
const pagePromise = context.waitForEvent('page');
//perform action to open new tab
await ordersLink.click({ modifiers: ['ControlOrMeta'] })
//capture new page
const newPage = await pagePromise;
// change focus to new tab
await newPage.waitForLoadState();
await newPage.bringToFront();
//sign in to application
await newPage.locator('#username').click();
await newPage.getByText('demouser', { exact: true }).click();
await newPage.locator('#password').click();
await newPage.getByText('testingisfun99', { exact: true }).click();
await newPage.locator('#login-btn').click();
//Assert empty orders list
await expect(newPage.locator('.orders-listing h2')).toHaveText("No orders found");









})