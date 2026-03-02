
import {test, expect} from "@playwright/test"

test("Retry failed Testcase", async({page})=>
    {
        await page.goto("https://playground.bsparksoftwaretechnologies.com/")
        const title = await page.title() // Bspark Software Technologies || Playground

        expect(title).toBe("Bala")

    })

    
test.skip("Skip Testcase", async({page})=>
    {
        await page.goto("https://playground.bsparksoftwaretechnologies.com/")
        const title = await page.title() // Bspark Software Technologies || Playground

        expect(title).toBe("Bala")

    })

test("Pass Testcase", async({page})=>
    {
        await page.goto("https://playground.bsparksoftwaretechnologies.com/")
        const title = await page.title()

        expect(title).toBe("Bspark Software Technologies || Playground")

    })

    
test.fail("Nagtive Testcase", async({page})=>
    {
        await page.goto("https://playground.bsparksoftwaretechnologies.com/")
        const title = await page.title()

        expect(title).toBe("Bala")

    })