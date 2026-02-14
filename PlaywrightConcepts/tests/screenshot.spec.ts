import {test} from "@playwright/test"


test("Take Screenshot", async({page})=>{


    await page.goto("https://playground.bsparksoftwaretechnologies.com/alert")

    await page.screenshot({path:"./Screenshot/img.png"})

     const buttonEle = page.locator("//button[text()='HIT ME']").first()

     await buttonEle.screenshot({path:"./Screenshot/img1.png"})


})