  import { test, expect } from '@playwright/test';
  
  test('verify Drag and drop actions', async ({ page }) => {
    await page.goto('https://www.webdriveruniversity.com/Actions/index.html');
    const source=page.locator('#draggable')
    const drop=page.locator('#droppable')
    await source.dragTo(drop)
  
})
test('verify Double click', async ({ page }) => {
    await page.goto('https://www.webdriveruniversity.com/Actions/index.html');
    await page.locator('#double-click').dblclick()
  
})
test('verify Mouse over2', async ({ page }) => {
    await page.goto('https://www.webdriveruniversity.com/Actions/index.html');
    await page.getByRole('button', { name: 'Hover Over Me Second!' }).hover()
    page.on('dialog', async dialog =>{
    console.log(dialog.message());
    await dialog.accept()  
    })
    await page.getByText('Link').nth(1).click() 
})
test('verify Mouse over1', async ({ page }) => {
    await page.goto('https://www.webdriveruniversity.com/Actions/index.html');
    await page.getByRole('button', { name: 'Hover Over Me First!' }).hover()
    page.on('dialog', async dialog =>{
    console.log(dialog.message());
    await dialog.accept()  
    })
     await page.getByText('Link').nth(0).click() 
})
test('verify Mouse over3', async ({ page }) => {
    await page.goto('https://www.webdriveruniversity.com/Actions/index.html');
    await page.getByRole('button', { name: 'Hover Over Me Third!' }).hover()
    page.on('dialog', async dialog =>{
    console.log(dialog.message());
    await dialog.accept()  
    })
     await page.getByText('Link').nth(2).click() 
})
test('verify Mouse over4', async ({ page }) => {
    await page.goto('https://www.webdriveruniversity.com/Actions/index.html');
    await page.getByRole('button', { name: 'Hover Over Me Third!' }).hover()
    page.on('dialog', async dialog =>{
    console.log(dialog.message());
    await dialog.accept()  
    })
     await page.getByText('Link').nth(3).click() 
})


test('verify Click and Hold', async ({ page }) => {
    await page.goto('https://www.webdriveruniversity.com/Actions/index.html');
    await page.locator('//div[@id="click-box"]').click()
    //const ClickAndHold=page.locator("//p[contains(text(),'Click and Hold!')]")
    //ClickAndHold.click()
    await page.mouse.up()
    await page.mouse.down()
    
    
  
})