import { Page, Locator } from '@playwright/test'


export class Checkoutpage{
    readonly page:Page
    readonly checkbtn:Locator

 constructor(page:Page)   
 {
    this.page=page
    this.checkbtn=page.locator('//button[contains(text(),"Checkout")]')
 }

 async checkoutpagebtn()
 {
     await this.checkbtn.click()
 }

}