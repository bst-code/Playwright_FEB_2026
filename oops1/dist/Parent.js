"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parent = void 0;
const GrandParent_1 = require("./GrandParent");
class Parent extends GrandParent_1.GrandParent {
    constructor() {
        super(...arguments);
        this.parentAge = 36;
    }
    parentProperty() {
        console.log("Parent owns Flat");
    }
}
exports.Parent = Parent;
