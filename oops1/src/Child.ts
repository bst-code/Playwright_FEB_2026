import { GrandParent } from "./GrandParent";
import { Parent} from "./Parent";


//Multi level - possible
//Multiple not possible

class Child extends Parent
{
    childAge:number = 7

    childProperty():void
    {
        console.log("child owns toy car");
        
    }

    parentProperty():void
    {
        console.log("Child parent property method");
        
    }
}

const obj = new Child()
obj.childProperty()
obj.parentProperty()
obj.grandParentProperty()