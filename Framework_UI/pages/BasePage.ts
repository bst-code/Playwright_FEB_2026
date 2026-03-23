import { Page } from '@playwright/test';
import { playwrightGenerics } from '../utills/playwrightGenerics';

export class BasePage extends playwrightGenerics {
    constructor(page: Page) {
        super(page);
    }

    // Common page methods can be added here
    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('networkidle');
    }
}