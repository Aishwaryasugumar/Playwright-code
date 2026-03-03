import { Page, Locator, expect } from '@playwright/test'


export class AddToCart {
    readonly page: Page
    readonly addtocart: Locator


    constructor(page: Page) {
        this.page = page
        this.addtocart = page.locator('//button[@id="add-to-cart"]')

    }

    async addingtocart() {
        await this.addtocart.click()

    }
}