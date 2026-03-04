import { test, expect } from '@playwright/test';

test('verify Data table', async ({ page }) => {
  await page.goto('https://www.webdriveruniversity.com/Data-Table/index.html');
  const table=page.locator('table')
  const rows=table.locator('tbody tr') 
  //console.log(rows.count());
  await expect(rows).toHaveCount(11)
  const data=await page.locator('#t02 tbody tr').nth(2).locator('td').nth(1).textContent()
  console.log(data);
})
test('verify Dynamic Data table', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/dynamic-table');
  const table=page.locator('table')
  const rows=table.locator('tbody tr') 
  const rowcount=await rows.count()
  console.log(rowcount);
  const columncount=await rows.nth(1).locator('td').count()
  console.log(columncount);
  for(let i=1;i<rowcount;i++)
  {
  for(let j=0;j<columncount;j++)
  {
  const data=await rows.nth(i).locator('td').nth(j).textContent() 
  //console.log(typeof data);
  
  if(data=="Firefox")
  {
    console.log("rowposition: ",i);
    console.log("columnpositionposition: ",j);
    console.log(data);
    await page.waitForTimeout(10000)
    
  }



  } 
  }

})