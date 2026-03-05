"use strict";
// Polymorphism -- poly -->Many and morphism - different form
//Types 
// 1 - Method overloading or comiple time polymorphism -- pending
// 2 - Method overridding or run time polymorphism
// Overridding -- Child extends parent -- child class will have same method siguature as of parent
//Overloading - Same method name with different parameter or datatype
class Calculator {
    add(n1, n2, n3, n4) {
        if (n3 !== undefined && n4 == undefined) {
            console.log(n1 + n2 + n3);
        }
        else if (n4 !== undefined) {
            console.log(n1 + n2 + n3 + n4);
        }
        else {
            console.log(n1 + n2);
        }
    }
}
const obj = new Calculator();
obj.add(1, 2);
obj.add("Bala", "murugan");
obj.add(1, 2, 3);
obj.add(1, 2, 3, 4);
