import { test, expect, Locator, Page } from '@playwright/test';
import { playwrightGenerics } from '../utils/playwrightGenerics';


// POM - Page object model ---> Desing patten --> It is used to store object repository for webelements

//1. Locate the webelements of that respective page 
//2. Create page methods 

export class LoginPage extends playwrightGenerics
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
    await this.enterText(this.emailEle,username)
    await this.enterText(this.passwordEle,password)
   }

   async clickLoginButton()
   {
    await this.clickElement(this.loginButton)
   }

   async getErrorMessage() 
   {
       return await this.getTextFromElement(this.errorMsgEle)
   }

   
}