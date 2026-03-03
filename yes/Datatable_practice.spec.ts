import { test, expect } from '@playwright/test';
test.only('verify Dynamic Data table', async ({ page }) => {
  await page.goto('https://demo.guru99.com/test/web-table-element.php');
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
    //const data=await rows.nth(i).locator('td').nth(j).textContent()
      //const company=await rows.nth(i).locator('td').nth(0).textContent()
      const company=await rows.nth(i).locator('td').nth(0).allInnerTexts()
      // console.log(company);
      // await expect.soft(company).toBe("Kajaria Ceramics")
      if(company.includes("Kajaria Ceramics"))
      {
        console.log("position1"   ,i);
        console.log("position2"   ,j);
        //->when we click button ->await rows.nth(i).locator('td').nth(j).click()
        
      }
      // else{
      //   console.log("company not found");
        
      // }
      // await page.waitForTimeout(7000)
      
      // console.log(company);
      // const data=company?.includes("HDIL")
      // console.log(data);
      
    // if(company?.includes("HDIL")|| company?.includes("Apollo Hospitals") || company?.includes("Bharat Petroleum") 
    //   ||company?.includes("YES Bank Ltd."))
    // {
  
    // console.log("rowposition"  ,i);
    // console.log("columnposition"  ,j);
    // console.log("actual: "   ,company);
    
    // }
    //await page.waitForTimeout(20000)


  } 
  }

  
  




})