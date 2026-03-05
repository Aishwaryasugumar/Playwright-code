import { test, expect } from '@playwright/test';

test('verify page title is present', async ({ page }) => {
  await page.goto('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
  await page.getByPlaceholder("First Name").fill("Aishwarya")
  //await page.getByRole('textbox',{name:"last_name"}).fill("harshu") 
  await page.getByPlaceholder("Last Name").fill("harshu")
  await page.getByRole('textbox',{name:"email"}).fill("aishwaryasugumar29@gmaul.com")
  //await page.getByRole('textbox',{name:"message"}).fill("xyz")
  await page.getByPlaceholder("Comments").fill("comments")
  //await page.locator(".contact_button").click()
  await page.getByRole('button', { name: 'RESET' })
});
test('verify login page', async ({ page }) => {
  await page.goto('https://www.webdriveruniversity.com/Login-Portal/index.html');
  await page.getByPlaceholder("Username").fill("Aishwarya")
  await page.getByPlaceholder("Password").fill("abc@123")
  await page.locator("#login-button").click()
})
test('verify webelement click', async ({ page }) => {
  await page.goto('https://www.webdriveruniversity.com/Click-Buttons/index.html');
 
 // await page.locator('//h4[contains(text(),"Congratulations!")]')
  //await page.locator('//p[contains(text(),"Well done for successfully using the ")]')
  // page.on('dialog', async dialog =>{
  //   console.log(dialog.message());
  //   await dialog.dismiss()  
  //   })
    await page.locator("#button2").click()
    await page.locator('#myModalJSClick').getByText('×').click()
    await page.locator("#button123").click()
    





})

