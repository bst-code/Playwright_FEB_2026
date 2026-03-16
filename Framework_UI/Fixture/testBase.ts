import {test as base} from '@playwright/test';
import { PageManager } from '../pages/PageManager';

type CustomFixture = {
    
    pageManager:PageManager
}

//test = base + customFixture
export const test = base.extend<CustomFixture>({

    pageManager: async({page},use)=>{

        //Before each
        console.log("Iam before each from custom fixture");
        
        //Test
        await use(new PageManager(page))
        
        //After Each
        console.log("Iam after each from custom fixture");
    }



})

