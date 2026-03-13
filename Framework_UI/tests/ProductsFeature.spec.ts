import { test, expect, Locator, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';


test.only("Create New Product", async({page})=>
{
    let loginObj = new LoginPage(page)
    let homeObj = new HomePage(page)
    let prodObj = new ProductPage(page)
    await page.goto("/login")
    await loginObj.loginToApp("jhon1@gmail.com","test@123")
    await homeObj.clickProducts()
    await prodObj.clickAddProduct()
    await prodObj.createProductForm("P1","Iphone", "Iphone 17", "200000", "Blue")
    await page.waitForTimeout(5000)

})

test("Verify product link takes to Product page", async({page})=>
{
    let loginObj = new LoginPage(page)
    let homeObj = new HomePage(page)
    await page.goto("/login")

    await loginObj.loginToApp("jhon1@gmail.com","test@123")
    await homeObj.clickProducts()
    let actualData = await homeObj.verifyProductNaigation()
    expect(actualData).toContain("products")

})