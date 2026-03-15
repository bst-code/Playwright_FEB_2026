
import { Page } from '@playwright/test';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { ProductPage } from './ProductPage';
export class PageManager
{
    private page: Page;
    private homePage?: HomePage;
    private loginPage?: LoginPage
    private productPage?: ProductPage

    //private name ="Bala"

    constructor(page:Page)
    {
        this.page = page;
        
    }

    // getName()
    // {
    //     if(! this.name == null)
    //     {
    //         this.name = "murugan"
    //     }
    //     return this.name
    // }

    getHomePage()
    {
     if(! this.homePage)
     {
         this.homePage = new HomePage(this.page)
     }

     return this.homePage
    }

    getLoginPage()
    {
      if(! this.loginPage)
     {
     this.loginPage = new LoginPage(this.page)
     }
     return this.loginPage
    }

    getProductPage()
    {
    if(! this.productPage)
     {
     this.productPage = new ProductPage(this.page)
     }
     return this.productPage
    }

}