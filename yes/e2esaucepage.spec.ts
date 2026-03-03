import { test, expect } from '@playwright/test';
import { Loginsaucepage } from '../pages/loginsaucepage'
import { Productpage } from '../pages/productpage';
import { AddToCart } from '../pages/addtocartpage';
import { Checkoutpage } from '../pages/checkout';
import { Carticon } from '../pages/carticon';
import { Details } from '../pages/detailspage';
import { Finishpage } from './finishpage';

test('verify loginsauce page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const sauceobj = new Loginsaucepage(page)
  // await sauceobj.loginpage('standard_user','secret_sauce')
  console.log(process.env.USER);
  console.log(process.env.PASSWORD);
  await sauceobj.loginpage(process.env.USER, process.env.PASSWORD)
  await page.waitForTimeout(2000)

  const product = new Productpage(page)
  await product.clickProduct()

  const cartobj = new AddToCart(page)
  await cartobj.addingtocart()
  await page.waitForTimeout(2000)

  const iconobj=new Carticon(page)
  await iconobj.clickcart()
  await page.waitForTimeout(2000)

  const checkoutobj=new Checkoutpage(page)
  await checkoutobj.checkoutpagebtn()
  await page.waitForTimeout(2000)

  const detailsobj=new Details(page)
  console.log(process.env.FIRSTNAME);
  console.log(process.env.SECONDNAME);
  console.log(process.env.POSTALCODE);
  detailsobj.detailsPage(process.env.FIRSTNAME,process.env.SECONDNAME,process.env.POSTALCODE)
  await page.waitForTimeout(2000)

  const finishobj=new Finishpage(page)
  await finishobj.btn()
  await page.waitForTimeout(2000)

})