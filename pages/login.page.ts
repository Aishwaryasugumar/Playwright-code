import { Page, Locator } from '@playwright/test'


export class LoginPage {
    readonly page: Page
    readonly username: Locator
    readonly password: Locator
    readonly loginbutton: Locator

    constructor(page: Page) {
        this.page = page
        this.username = page.getByPlaceholder('Username')
        this.password = page.locator('[name="password"]')
        this.loginbutton = page.locator('[type="submit"]')
    }

    async login(user: string, pass: string) {
        await this.username.fill(user)
        await this.password.fill(pass)
        await this.loginbutton.click()
    }
}