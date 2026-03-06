class HDFC implements RBI, worldBank
{
    gold_ROI: number = 9

    getCurrencyType(): void {
       
        console.log("World bank method called and implemented");
        
    }
    getCustomerDetails(): void 
    {
        console.log("HDFC get customer details like phone number, PAN");
        
    }

    getAccountBalance():void
    {
        console.log("Account balance is 10K");
        
    }

}

let hdfcObj = new HDFC()
hdfcObj.getCustomerDetails()
hdfcObj.getAccountBalance()
console.log(hdfcObj.gold_ROI);
