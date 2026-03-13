import { Locator, Page, TestInfo } from "@playwright/test";


export class playwrightGenerics
{

    readonly page: Page;
    constructor(p: Page)
    {
        this.page = p
    }


    //Inputbox - type, clear, placeholder, default text
    async enterText(ele: Locator, valueToEnter:string): Promise<void>
    {
        await ele.fill(valueToEnter)
        console.log("Value entered as ", valueToEnter);
    }

    async clearText(ele: Locator): Promise<void>
    {
        await ele.clear()
        console.log("Value Cleared");
    }

    async getAttributeText(ele: Locator, attributeName:string): Promise<string>
    {
       const data = await ele.getAttribute(attributeName)
       console.log("getAttribute of ", attributeName);
       return data || ""
    }


     async getTextFromElement(ele: Locator): Promise<string>
    {
       const data = await ele.textContent()
       console.log("getText from element ", data);
       return data || ""
    }

    //Button - click, doubleclick, rightclick

    async clickElement(ele: Locator): Promise<void>
    {
        await ele.click()
        console.log("Element clciked");
    }

    //text - textContent

    //dropdown 

     //await dropdownEle.selectOption({index:1})
    //await dropdownEle.selectOption({value: "7"})
   // await dropdownEle.selectOption({label:"22"})

    async selectByLabel(ele:Locator,dropdownValue:string):Promise<void>
    {
        await ele.selectOption({label: dropdownValue})
        console.log("Selected Dropdown by label",dropdownValue);        
    }
    
    async selectByIndex(ele:Locator,indexValue:number):Promise<void>
    {
        await ele.selectOption({index: indexValue})
        console.log("Selected Dropdown by index",indexValue);        
    }

    //frame

    //windowhandling

    //alerts

    //hover

    //"visible" | "hidden" | "stable" | "enabled" | "disabled" | "editable

    //screeshot - ele and page

    //browser commands - back, frwd, refresh, close, getTitle, url, navigateTo

    async toPreviousPage(page:Page):Promise<void>
    {
        await page.goBack()
        console.log("Got back to previous page");        
    }

    async getCurrentUrl(page: Page) : Promise<string>
    {
        let currentURL = page.url()
        console.log("Current URL s", currentURL);
        return currentURL
    }

}