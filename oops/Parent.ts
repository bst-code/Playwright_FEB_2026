import { GrandParent } from "./GrandParent";


export class Parent extends GrandParent
{
    parentAge:number = 36

    parentProperty():void
    {
        console.log("Parent owns Flat");
        
    }
}