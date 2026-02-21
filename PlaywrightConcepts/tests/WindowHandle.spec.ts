import {test,chromium} from "@playwright/test"


test("Open multiple page manually",async()=>{

    const browser = await chromium.launch({headless:false}) //1
    const context = await browser.newContext()  //1
    const page1 = await context.newPage() //1
    const page2 = await context.newPage()  //2

    await page1.goto("https://www.amazon.in/")
    await page2.goto("https://www.flipkart.com/")

    await page1.waitForTimeout(5000)
    await page2.waitForTimeout(5000)

    console.log(context.pages().length);
    
})

test.only("Handle Child window", async()=>{

    const browser = await chromium.launch({headless:false}) //1
    const context = await browser.newContext()  //1
    const page = await context.newPage()
    await page.goto("https://playground.bsparksoftwaretechnologies.com/windowhandle")
    const ele = page.locator("#bst_btn4")

    const childWindow = context.waitForEvent("page")
    await ele.click()
    const page2 = await childWindow
    console.log("Intract with Child Window", page2.url());
    console.log("Intract with Parent Window", page.url());

    await page.waitForTimeout(5000)

})
