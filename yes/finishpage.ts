import { Page, Locator } from '@playwright/test'


export class Finishpage{
    page:Page
    finishbtn:Locator

constructor(page:Page)
{
    this.page=page
    this.finishbtn=page.locator('//button[@id="finish"]')
}  

async btn()
{
    await this.finishbtn.click()
}
}