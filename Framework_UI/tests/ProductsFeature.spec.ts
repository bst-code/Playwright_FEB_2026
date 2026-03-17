import {test} from "../Fixture/testBase.ts"
import { expect, Locator, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { Data } from "../testDatas/data.json"
import "./hooks.ts"
import { PageManager } from '../pages/PageManager.ts';

test.describe("Product testcases", ()=>{

test("Create New Product", async ({ page, pageManager }) => {

    //let pageManager = new PageManager(page); //Custom fixture 

    //let loginObj = new LoginPage(page)
   // let homeObj = new HomePage(page)
   // let prodObj = new ProductPage(page)

    console.log(process.env.ENV);
    console.log(process.env.DB);
    console.log(process.env.DB_USER_NAME);
   

    const testcase = Data.TC_001
    await pageManager.getLoginPage().loginToApp(Data.UserDetails.UserName, Data.UserDetails.Password)
    await pageManager.getHomePage().clickProducts()
    await pageManager.getProductPage().clickAddProduct()
    await pageManager.getProductPage().createProductForm(testcase.ProductID, testcase.ProductName, testcase.ProductDescription, testcase.ProductPrice, testcase.ProductColor)

})

test("Verify product link takes to Product page", async ({ page,pageManager }) => {
    
     //let pageManager = new PageManager(page);

    // let loginObj = new LoginPage(page)
    // let homeObj = new HomePage(page)

    const testcase = Data.TC_002

    await pageManager.getLoginPage().loginToApp(Data.UserDetails.UserName, Data.UserDetails.Password)
    await pageManager.getHomePage().clickProducts()
    let actualData = await pageManager.getHomePage().verifyProductNaigation()
    expect(actualData).toContain(testcase.ExpectedText)

})

})