import {test} from "@playwright/test"

test("select dropdown", async({page})=>{

    await page.goto("https://playground.bsparksoftwaretechnologies.com/validate")

    const dropdownEle = page.locator("#day")
    

    // value, index, label
    //await dropdownEle.selectOption({index:1})
    //await dropdownEle.selectOption({value: "7"})
    await dropdownEle.selectOption({label:"22"})
    await page.waitForTimeout(5000)
    

})