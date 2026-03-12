import { Locator, Page, TestInfo } from "@playwright/test";


export class playwrightGenerics
{

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
        ele.click()
        console.log("Element clciked");
    }

    //text - textContent

    //dropdown 

    //frame

    //windowhandling

    //alerts

    //hover

    //"visible" | "hidden" | "stable" | "enabled" | "disabled" | "editable

    //screeshot - ele and page

    //browser commands - back, frwd, refresh, close, getTitle, url, navigateTo
}