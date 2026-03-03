import { Page, Locator } from '@playwright/test'


export class Adminpage{
readonly page:Page
readonly adminbtn: Locator
readonly add:Locator
readonly UserRole: Locator
//readonly employeeName: Locator
//readonly status: Locator
//readonly username: Locator
//readonly password: Locator
//readonly confirmpassword: Locator
//readonly savebutton:Locator

constructor(page:Page)
{
    this.page=page
    this.adminbtn=page.locator('//span[text()="Admin"]')
    this.add=page.locator('//button[@fdprocessedid="q8cl7s"]')
    this.UserRole=page.locator('//div[text()="-- Select --"]').first()
    //this.employeeName=page.getByPlaceholder('Type for hints...')
   //this.status=page.locator()
   //this.username=page.locator('//div/input[@fdprocessedid="upto3y"]')
   //this.password=page.locator('[type="password"]')
   //this.confirmpassword=page.locator()
   //this.savebutton=page.locator('[type="submit"]')
}

async admin(role:string,empname:string,status:string,user:string,
    pass:string,confirm:string)
    {
        await this.adminbtn.click()
        await this.page.waitForTimeout(10000)
        await this.add.click()
        await this.page.waitForTimeout(10000)
        await this.UserRole.click()
        await this.page.waitForTimeout(2000)
        // await this.employeeName.fill(empname)
        // //await this.status.selectOption(status)
        // await this.username.selectOption(user)
        // //await this.password.fill(pass)
        // //await this.confirmpassword.fill(confirm)
        // await this.savebutton.click()

}
}