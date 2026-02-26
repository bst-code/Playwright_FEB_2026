import {test, expect} from "@playwright/test"

test("Get API response from Networktab", async ({page})=>{

    await page.goto("https://playground.bsparksoftwaretechnologies.com/login")

    await page.locator("#username").fill('bspark@test.com')
    await page.locator("#pwd").fill('12364574')
    await page.locator("//button[text()='Login']").click()

    const res = await page.waitForResponse("**/api/users/login")
    const body = await res.json()
   
    console.log(res.status());
    expect(res.status()).toBe(401)
    console.log(res.statusText());

    console.log((body));
    
   
})