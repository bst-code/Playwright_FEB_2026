"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Parent_1 = require("./Parent");
//Multi level - possible
//Multiple not possible
class Child extends Parent_1.Parent {
    constructor() {
        super(...arguments);
        this.childAge = 7;
    }
    childProperty() {
        console.log("child owns toy car");
    }
    parentProperty() {
        console.log("Child parent property method");
    }
}
const obj = new Child();
obj.childProperty();
obj.parentProperty();
obj.grandParentProperty();
