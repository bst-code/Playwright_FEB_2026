//map --> key value pair 

let customerDetails = new Map([["rollno", "001"]]);

customerDetails.set("Name", "Bala")
customerDetails.set("Mobile", "96006666876")
customerDetails.set("age", 36)
customerDetails.set("Email", "bala@bspark.com")
customerDetails.set("email", "john@bspark.com")
customerDetails.set(100, "chennai")

console.log(customerDetails);

if(customerDetails.has("email1"))
{
    console.log("Key already exists");
    
}else
    {
       customerDetails.set("email1", "shivya@bspark.com")
 
    }

console.log("Customer age is ",customerDetails.get("age"));
console.log(customerDetails.size);

console.log(customerDetails.keys());
console.log(customerDetails.values());

customerDetails.delete("Mobile")
console.log(customerDetails);

customerDetails.clear()
console.log(customerDetails);

// Find the count of each letter from given word
// Example - input---> Bala / output --> B=1, a= 2, l =1






