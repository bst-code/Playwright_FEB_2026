import {test} from "@playwright/test"

test("Xpath Concept and getText", async({page})=>{

    await page.goto("https://playground.bsparksoftwaretechnologies.com/buttons")

    const buttonEle = page.locator("//button[@name='btn_home']")
    const actualData = await buttonEle.textContent()
    console.log(actualData);

    await buttonEle.click()

    await page.waitForTimeout(5000)
    

})