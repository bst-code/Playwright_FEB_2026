import {test} from "@playwright/test"


test("Handle Alerts", async({page})=>{


    page.once("dialog", async(dialog)=>{

        const text = dialog.message()

        if(text === "PRESS A BUTTON!")
        {
            dialog.dismiss()
        }else if(text === "I AM AN ALERT BOX !")
        {
            dialog.accept()
        }else if(text ==="PLEASE ENTER YOUR NAME")
        {            
            dialog.accept("Bala")
        }

    })

    await page.goto("https://playground.bsparksoftwaretechnologies.com/alert")

    const buttonEle = page.locator("//button[text()='HIT ME']").first()
    await buttonEle.click()
    await page.waitForTimeout(5000)

    const buttonEle1 = page.locator("//button[text()='HIT ME']").nth(2)
    await buttonEle1.click()
    await page.waitForTimeout(5000)
})