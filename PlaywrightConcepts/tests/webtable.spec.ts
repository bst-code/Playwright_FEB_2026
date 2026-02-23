import {test,chromium} from "@playwright/test"

test("Get All Data from WebTable", async ({page})=>
    {
        await page.goto("https://playground.bsparksoftwaretechnologies.com/webtable")
        const table = page.locator("//table[@id='webtable']/tbody")
        const rows = table.locator("tr")
        for(let i = 0; i< await rows.count(); i++)
        {
            const cells = rows.nth(i).locator("td")

            for(let j = 0; j< await cells.count(); j++)
            {
                const ColumnData = await cells.nth(j).textContent()
                console.log(ColumnData);
                
            }
        }

    })

test.only("Select HR Record only", async ({page})=>
    {
        test.slow()
        await page.goto("https://playground.bsparksoftwaretechnologies.com/webtable")
        const table = page.locator("//table[@id='webtable']/tbody")
        const rows = table.locator("tr")
        for(let i = 0; i< await rows.count(); i++)
        {
              const size = i +1;
              const isActiveEle = page.locator("(//input[@name='active'])["+size+"]")

            const cells = rows.nth(i).locator("td")
            for(let j = 0; j< await cells.count(); j++)
            {
                const ColumnData = await cells.nth(j).textContent()
                if ( ColumnData == "HR" || ColumnData == "TECH SUPPORT")
                {
                    isActiveEle.click()
                }
                console.log(ColumnData);
                
            }
        }

          await page.waitForTimeout(15000)

    })

//1. Filter record with roles dropdown value - HR 
//2. Search email and verify respective data is displayed 
//3. Search with invalid data and verify no record found msg
//4. Validate Sort functonality --> Get the ID and verify if sorting is working as expected

// Before Sorting - get the UI data [101,103,102,104,106,105] --> write program to sort it [101,102,103,104,105,106]
//expectedList ---> [101,102,103,104,105,106]  
// actualList after sorting [101,102,103,104,105,106]