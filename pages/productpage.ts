////div[contains(text(),"Sauce Labs Backpack")]
import { Page, Locator, expect } from '@playwright/test'


export class Productpage{
    page:Page
    productselect:Locator

    constructor(page:Page)
    {
        this.page=page
        this.productselect=page.locator('//a/div[contains(text(),"Sauce Labs Backpack")]')
        //this.productselect=page.getByRole('link', {name:'Sauce Labs Backpack'})
    }
    async clickProduct()
    {
        await this.productselect.click()
        await this.page.waitForTimeout(2000)
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=4')

    }
}