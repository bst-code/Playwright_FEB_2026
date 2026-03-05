"use strict";
class customers {
    constructor() {
        //Accessmodifiers - Public, Private and Protected
        this.name = "Bala";
        this.age = 36;
        this.location = "chennai";
    }
    getCustomerName() {
        console.log("My name is John");
        console.log("My age is ", this.age);
        console.log("My location is", this.location);
    }
    //getter and setters - which is going to get and set value of private variables
    getAge() {
        return this.age;
    }
    setAge(n1) {
        this.age = n1;
    }
}
const obj1 = new customers();
obj1.name = "murugan";
console.log(obj1.name);
obj1.getCustomerName();
console.log("Encapsulation -->", obj1.getAge());
obj1.setAge(100);
console.log("Encapsulation -->", obj1.getAge());
