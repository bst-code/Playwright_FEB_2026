import {test} from "@playwright/test"

test("My firsttestcase", async ({page})=>{

 await page.goto("/")

 const actualTitle = await page.title()
 console.log(actualTitle);

 const actualURL = page.url();
 console.log(actualURL);

  await page.goBack()
  await page.waitForTimeout(3000)

  await page.goForward()
  await page.waitForTimeout(3000)

  await page.reload()
  await page.waitForTimeout(3000)

  //const WebAutomationEle = page.locator(".Home_title__ANWNn").first()
  //const WebAutomationEle = page.locator(".Home_title__ANWNn").last()
  const WebAutomationEle = page.locator(".Home_title__ANWNn").nth(1)

  await WebAutomationEle.click()

  await page.waitForTimeout(5000)

})