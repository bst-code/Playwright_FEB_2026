import {test} from "@playwright/test"

test("Locate using ID", async({page})=>{

    await page.goto("https://playground.bsparksoftwaretechnologies.com/send_keys")

    // Ele --> ID --> #
    // Ele --> ClassName --> .
    const inputEle = page.locator("#email") //"#disabled"
    await inputEle.fill("Balamurugan")
    await page.waitForTimeout(2000)
    await inputEle.clear()
    await page.waitForTimeout(2000)
    await inputEle.fill("Bspark")
    await page.waitForTimeout(2000)

    const appendInputEle = page.locator("id=append")
    const defualtText = await appendInputEle.getAttribute("value")
    console.log(defualtText);
    

})