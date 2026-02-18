import {test} from "@playwright/test"

test("Frames concept", async({page})=>{


    await page.goto("https://playground.bsparksoftwaretechnologies.com/frames")

    const frame = page.frameLocator("#bst_frame1")

    const inputEle = frame.getByPlaceholder("Type your name here")
    await inputEle.fill("Bala")

    const submitButtonEle = frame.getByRole('button',{name:"submit"})
    await submitButtonEle.click()

    await page.waitForTimeout(5000)

    //Nested frame code - complete the assignment 
   const frame1= page.frameLocator("")
   const frame2= frame1.frameLocator("")
   const ele = frame2.locator("")
   await ele.fill("Bala");

   
   //multiple frame handled via page.frames() - it wont be used much in real scenarios
    const allFrames = page.frames()
    for(const fr of allFrames)
    {
        fr.locator("#id").fill("Bala")
    }


})