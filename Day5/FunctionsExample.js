function getDetails()
{
console.log("Iam get Details method");
}

const getPanCardNo = ()=>
{
    console.log("Iam get Pan card method");
}

function getBankDetails(customerName, callback)
{
    console.log("Welcome, ", customerName);
    callback()
}

getDetails()
getPanCardNo()

getBankDetails("Bala",()=>{ console.log("Iam callback function")} )
getBankDetails("Janani", getDetails)

