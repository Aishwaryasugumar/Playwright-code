import { Page, Locator } from '@playwright/test'


export class Details{
    page:Page
    firstname:Locator
    lastname:Locator
    postal:Locator
    continuebtn:Locator

 constructor(page:Page)
 {
    this.page=page
    this.firstname=page.locator('//input[@id="first-name"]')
    this.lastname=page.locator('//input[@id="last-name"]')
    this.postal=page.locator('//input[@id="postal-code"]')
    this.continuebtn=page.locator('//input[@id="continue"]')
 }   

 async detailsPage(namefirst:any,namesecond:any,postcode:any)
 {
    await this.firstname.fill(namefirst)
    await this.lastname.fill(namesecond)
    await this.postal.fill(postcode)
    await this.continuebtn.click()
 }
}