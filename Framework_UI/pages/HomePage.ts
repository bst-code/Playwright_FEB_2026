import { test, expect, Locator, Page } from '@playwright/test';
import { playwrightGenerics } from '../utills/playwrightGenerics';


export class HomePage extends playwrightGenerics
{
    readonly productEle:Locator
    readonly userEle: Locator

    constructor(page: Page)
    {
        super()
        this.productEle = page.getByText("Products")
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
}
