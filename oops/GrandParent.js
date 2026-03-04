"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrandParent = void 0;
var GrandParent = /** @class */ (function () {
    function GrandParent() {
        this.grandParentAge = 75;
    }
    GrandParent.prototype.grandParentProperty = function () {
        console.log("Grand Parent owns Agri land");
    };
    return GrandParent;
}());
exports.GrandParent = GrandParent;
