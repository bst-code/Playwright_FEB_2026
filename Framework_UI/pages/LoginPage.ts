import { test, expect, Locator, Page } from '@playwright/test';
import { playwrightGenerics } from '../utills/playwrightGenerics';


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
     super();
     this.emailEle = page.locator("#username")
     this.passwordEle = page.locator("#pwd")
     this.loginButton = page.getByText("Login")
     this.errorMsgEle = page.locator(".error")
   }

   //Page methods -- No data should be hardcoded
   async loginToApp(username: string, password:string)
   {
    await this.enterText(this.emailEle,username)
    await this.enterText(this.passwordEle,password)
    await this.clickElement(this.loginButton)
   }

   async getErrorMessage() 
   {
       return await this.getTextFromElement(this.errorMsgEle)
   }

   
}