import { Parent} from "./Parent";

class Child extends Parent
{
    childAge:number = 7

    childProperty():void
    {
        console.log("child owns toy car");
        
    }
}

const obj = new Child()
obj.childProperty()
obj.parentProperty()
obj.grandParentProperty()