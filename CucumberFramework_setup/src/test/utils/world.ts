import { setWorldConstructor } from '@cucumber/cucumber';
import { Browser, Page } from '@playwright/test';

export class CustomWorld {

    browser!: Browser;
    page!: Page;
}

setWorldConstructor(CustomWorld);

