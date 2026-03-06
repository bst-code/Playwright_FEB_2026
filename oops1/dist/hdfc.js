"use strict";
class HDFC {
    constructor() {
        this.gold_ROI = 9;
    }
    getCurrencyType() {
        console.log("World bank method called and implemented");
    }
    getCustomerDetails() {
        console.log("HDFC get customer details like phone number, PAN");
    }
    getAccountBalance() {
        console.log("Account balance is 10K");
    }
}
let hdfcObj = new HDFC();
hdfcObj.getCustomerDetails();
hdfcObj.getAccountBalance();
console.log(hdfcObj.gold_ROI);
