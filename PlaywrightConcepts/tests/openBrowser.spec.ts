import {test,chromium, firefox,webkit} from "@playwright/test"


test("Open browser manually", async()=>{

    //browser, context, page

    const browser = await chromium.launch({headless:false}) // open the browser

    const context = await browser.newContext() // private window

    const page = await context.newPage() //tab

    await page.goto("https://playground.bsparksoftwaretechnologies.com")

    await page.waitForTimeout(5000)

    await page.close()
   
})

test.only("Open browser using page fixture", async({page})=>{

   
    await page.goto("https://playground.bsparksoftwaretechnologies.com")

    await page.waitForTimeout(5000)

    await page.close()
   
})