import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page'
import { Adminpage } from '../pages/admin.page';

test('verify login page', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  const loginobject = new LoginPage(page)
  await loginobject.login('Admin', 'admin123')
  await page.waitForTimeout(2000)
  const adminobject = new Adminpage(page)
  await adminobject.admin('Admin', 'Testing', 'Enabled', 'Aishwarya', 'Orange@123', 'Orange@123')
  await page.waitForTimeout(2000)
})


  
  
