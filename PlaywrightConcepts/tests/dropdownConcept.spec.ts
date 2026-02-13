import {test} from "@playwright/test"

test("select dropdown", async({page})=>{

    await page.goto("https://playground.bsparksoftwaretechnologies.com/validate")

    const dropdownEle = page.locator("#day")
    

    // value, index, label
    //await dropdownEle.selectOption({index:1})
    //await dropdownEle.selectOption({value: "7"})
    await dropdownEle.selectOption({label:"22"})
    await page.waitForTimeout(5000)
    
    //Sept 13 2026
    //Get All options from dropdown

    //const allOptions = page.locator("#day option") //css Selector
    const allOptionsEle = page.locator("//select[@id='day']/option") // Xpath // $$
    const count = await allOptionsEle.count();
    for(let i = 0; i<count; i++)
    {
        const actualText = await allOptionsEle.nth(i).textContent()
        console.log(actualText);
        
    }



})