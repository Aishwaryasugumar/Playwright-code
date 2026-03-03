import { Page, Locator } from '@playwright/test'


export class Loginsaucepage{
    readonly page:Page
    readonly username:Locator
    readonly password:Locator
    readonly loginbtn:Locator

    constructor(page:Page)
    {
        this.page=page
        this.username=page.locator('//input[@id="user-name"]')
        this.password=page.locator('//input[@id="password"]')
        this.loginbtn=page.locator('//input[@id="login-button"]')
    }

    async loginpage(user:any,pass:any)
    {
        await this.username.fill(user)
        await this.password.fill(pass)
        await this.loginbtn.click()
    }
}