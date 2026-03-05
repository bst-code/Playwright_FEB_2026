"use strict";
class company extends customers {
    constructor() {
        super(...arguments);
        this.employeeCount = 100;
    }
    demo() {
        console.log(this.location);
        this.getCustomerName();
    }
}
