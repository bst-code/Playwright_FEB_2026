
import { test} from '@playwright/test';

test.beforeAll("Before All", async()=>
    {
        console.log("Before all called");
        
    })
    
test.afterAll("After All", async()=>
    {
        console.log("After all called");
        
    })

test.beforeEach("Before Each", async ({ page }) => {
    console.log("Before Each called...");
    await page.goto("/login")
})


test.afterEach("After each", async ({ page }) => {

    console.log("After Each called...");
    await page.waitForLoadState('networkidle');

})
