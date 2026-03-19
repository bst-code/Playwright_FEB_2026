import { Given, When, Then } from "@cucumber/cucumber"

Given('I open browser', async ()=> {
    console.log("Browser opened");
});

Given('I goto login page {string}', async (url:string)=> {

    console.log("Navigate to ",url );
});

When('I enter username {string} and Password {string}', async (userName:string, password:string)=> {
    console.log("username entered as ", userName);
    console.log("password enetered as ", password);
});

When('I Click login button', async ()=> {
console.log("User clicked login button...");
});

Then('I Validate home page title {string}', async (expectedTitle:string)=> {
console.log("Home page title matched", expectedTitle);
});

Then('I Validate error message {string}', async (errorMsg:string)=> {
    console.log("Error message matched", errorMsg);
});