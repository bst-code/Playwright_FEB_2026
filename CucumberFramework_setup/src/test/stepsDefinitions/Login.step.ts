import { Given, When, Then } from "@cucumber/cucumber"
import { CustomWorld } from "../utils/world";
import { expect } from "@playwright/test";


Given('I goto login page {string}', async function(this:CustomWorld,url:string) {

    console.log("Navigate to ",url );
    await this.page.goto(url)
    await this.page.waitForTimeout(3000)
});

When('I enter username {string} and Password {string}', async function(this:CustomWorld, userName:string, password:string)
{
    await this.loginPage.loginToApp(userName, password)
});

When('I Click login button', async function (this:CustomWorld) {
console.log("User clicked login button...");

await this.loginPage.clickLoginButton()

});

Then('I Validate home page title {string}', async function(this:CustomWorld, expectedTitle:string) {
console.log("Home page title matched", expectedTitle);
});

Then('I Validate error message {string}', async function(this:CustomWorld,expectedErrorMsg:string) {
    console.log("Error message matched", expectedErrorMsg);

   let actualData = await this.loginPage.getErrorMessage()
   expect.soft(actualData).toBe(expectedErrorMsg)
});