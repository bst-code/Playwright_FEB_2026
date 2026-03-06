"use strict";
class calculator {
    constructor(i, j) {
        this.n1 = 1;
        this.n2 = 2;
        if (i !== undefined && j !== undefined) {
            this.n1 = i;
            this.n2 = j;
        }
        else {
            console.log("Iam constructor without variable");
        }
    }
    add() {
        console.log(this.n1 + this.n2);
    }
}
const cal = new calculator(11, 22);
cal.add();
