import { Locator, Page, TestInfo, Frame } from "@playwright/test";


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
    
    async selectByValue(ele:Locator,value:string):Promise<void>
    {
        await ele.selectOption({value: value})
        console.log("Selected Dropdown by value",value);        
    }

    // Button additional actions
    async doubleClickElement(ele: Locator): Promise<void> {
        await ele.dblclick();
        console.log("Element double clicked");
    }

    async rightClickElement(ele: Locator): Promise<void> {
        await ele.click({ button: 'right' });
        console.log("Element right clicked");
    }

    // Frame handling
    async switchToFrame(frameName: string): Promise<Frame> {
        const frame = this.page.frame(frameName);
        if (!frame) throw new Error(`Frame ${frameName} not found`);
        console.log(`Switched to frame ${frameName}`);
        return frame;
    }

    // Window handling
    async getAllWindows(): Promise<Page[]> {
        return this.page.context().pages();
    }

    async switchToWindow(index: number): Promise<Page> {
        const pages = await this.getAllWindows();
        if (index >= pages.length) throw new Error(`Window at index ${index} not found`);
        console.log(`Switched to window ${index}`);
        return pages[index];
    }

    // Alerts
    async handleAlert(action: 'accept' | 'dismiss' = 'accept'): Promise<void> {
        this.page.on('dialog', dialog => {
            if (dialog.type() === 'alert') {
                if (action === 'accept') {
                    dialog.accept();
                } else {
                    dialog.dismiss();
                }
                console.log(`Alert ${action}ed`);
            }
        });
    }

    async handleConfirm(action: 'accept' | 'dismiss' = 'accept'): Promise<void> {
        this.page.on('dialog', dialog => {
            if (dialog.type() === 'confirm') {
                if (action === 'accept') {
                    dialog.accept();
                } else {
                    dialog.dismiss();
                }
                console.log(`Confirm ${action}ed`);
            }
        });
    }

    async handlePrompt(text: string = '', action: 'accept' | 'dismiss' = 'accept'): Promise<void> {
        this.page.on('dialog', dialog => {
            if (dialog.type() === 'prompt') {
                if (action === 'accept') {
                    dialog.accept(text);
                } else {
                    dialog.dismiss();
                }
                console.log(`Prompt ${action}ed with text: ${text}`);
            }
        });
    }

    // Hover
    async hoverElement(ele: Locator): Promise<void> {
        await ele.hover();
        console.log("Hovered over element");
    }

    // Visibility states
    async waitForElementState(ele: Locator, state: "visible" | "hidden" | "enabled" | "disabled" | "editable"): Promise<void> {
        if (state === 'visible' || state === 'hidden') {
            await ele.waitFor({ state });
        } else {
            await this.page.waitForFunction(async () => {
                switch (state) {
                    case 'enabled':
                        return await ele.isEnabled();
                    case 'disabled':
                        return await ele.isDisabled();
                    case 'editable':
                        return await ele.isEditable();
                    default:
                        throw new Error(`Unsupported state: ${state}`);
                }
            });
        }
        console.log(`Waited for element to be ${state}`);
    }

    // Screenshots
    async takePageScreenshot(fileName: string): Promise<void> {
        await this.page.screenshot({ path: fileName });
        console.log(`Page screenshot saved as ${fileName}`);
    }

    async takeElementScreenshot(ele: Locator, fileName: string): Promise<void> {
        await ele.screenshot({ path: fileName });
        console.log(`Element screenshot saved as ${fileName}`);
    }

    // Browser commands
    async goForward(): Promise<void> {
        await this.page.goForward();
        console.log("Navigated forward");
    }

    async refreshPage(): Promise<void> {
        await this.page.reload();
        console.log("Page refreshed");
    }

    async getPageTitle(): Promise<string> {
        const title = await this.page.title();
        console.log(`Page title: ${title}`);
        return title;
    }

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
        console.log(`Navigated to ${url}`);
    }

    async closeBrowser(): Promise<void> {
        await this.page.close();
        console.log("Browser closed");
    }

    async toPreviousPage():Promise<void>
    {
        await this.page.goBack()
        console.log("Got back to previous page");        
    }

    async getCurrentUrl() : Promise<string>
    {
        let currentURL = this.page.url()
        console.log("Current URL s", currentURL);
        return currentURL
    }

}