import {test, expect} from "@playwright/test"


//https://playwright.dev/docs/test-assertions#auto-retrying-assertions
//https://playwright.dev/docs/test-assertions#non-retrying-assertions
//https://playwright.dev/docs/test-assertions#soft-assertions

test("Config test", async({page})=>{

    await page.goto("https://playground.bsparksoftwaretechnologies.com/buttons")

    const buttonEle = page.locator("//button[@name='btn_home']")
    //const actualData = await buttonEle.textContent()
   // console.log(actualData); //GO TO HOME PAGE

    //expect(actualData).toEqual("Bala")
   // await expect(buttonEle).toBeVisible()
   // await expect(buttonEle).toBeEnabled()
    await expect(buttonEle).toHaveText("GO TO HOME PAGE Bala")

    const buttoneEle_1 = page.locator("#bst_btn2")
    await expect(buttoneEle_1, "Element to have text").toHaveText("GET POSITION")
 
    await page.waitForTimeout(5000)
    

})

test("Soft assert test", async({page})=>{

    await page.goto("https://playground.bsparksoftwaretechnologies.com/buttons")

    const buttonEle = page.locator("//button[@name='btn_home']")
    //const actualData = await buttonEle.textContent()
   // console.log(actualData); //GO TO HOME PAGE

    //expect(actualData).toEqual("Bala")
   // await expect(buttonEle).toBeVisible()
   // await expect(buttonEle).toBeEnabled()
    await expect.soft(buttonEle).toHaveText("GO TO HOME PAGE Bala")

    const buttoneEle_1 = page.locator("#bst_btn2")
    await expect.soft(buttoneEle_1).toHaveText("GET POSITION")
 
    await page.waitForTimeout(5000)
    

})