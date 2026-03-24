import { test, expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';


// POM - Page object model ---> Desing patten --> It is used to store object repository for webelements

//1. Locate the webelements of that respective page 
//2. Create page methods 

export class LoginPage extends BasePage
{

   // Locate elements
   readonly emailEle: Locator
   readonly passwordEle : Locator
   readonly loginButton : Locator
   readonly errorMsgEle: Locator

   constructor(page: Page)
   {
     super(page);
     this.emailEle = page.locator("#username")
     this.passwordEle = page.locator("#pwd")
     this.loginButton = page.getByText("Login").last()
     this.errorMsgEle = page.locator(".error")
   }

   //Page methods -- No data should be hardcoded
   async loginToApp(username: string, password:string)
   {
    try {
        await this.enterText(this.emailEle,username)
        await this.enterText(this.passwordEle,password)
        await this.clickElement(this.loginButton)
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
   }

   async getErrorMessage() 
   {
       await this.waitForElementState(this.errorMsgEle, 'visible');
       return await this.getTextFromElement(this.errorMsgEle)
   }   
}