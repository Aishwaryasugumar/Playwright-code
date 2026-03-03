import { Page, Locator, expect } from '@playwright/test'


export class Carticon{
    readonly page:Page
    readonly iconbtn:Locator

constructor(page:Page)
{
    this.page=page
    this.iconbtn=page.locator('//a[@class="shopping_cart_link"]')
}   

async clickcart()
{
    await this.iconbtn.click()
}


}