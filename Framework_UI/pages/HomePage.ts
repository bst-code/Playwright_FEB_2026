import { test, expect, Locator, Page } from '@playwright/test';
import { playwrightGenerics } from '../utills/playwrightGenerics';


export class HomePage extends playwrightGenerics
{
    readonly productEle:Locator
    readonly userEle: Locator
    readonly page: Page

    constructor(page: Page)
    {
        super(page)
        this.page = page
        this.productEle = page.getByText("Products").first()
        this.userEle = page.getByText("Users")
    }

    async clickUsers()
    {
        await this.clickElement(this.userEle)
    }

     async clickProducts()
    {
        await this.clickElement(this.productEle)
    }

    async verifyProductNaigation()
    {
       return await this.getCurrentUrl(this.page)
    }
}
