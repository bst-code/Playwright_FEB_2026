"use strict";
// Polymorphism -- poly -->Many and morphism - different form
//Types 
// 1 - Method overloading or comiple time polymorphism -- pending
// 2 - Method overridding or run time polymorphism
// Overridding -- Child extends parent -- child class will have same method siguature as of parent
//Overloading - Same method name with different parameter or datatype
class Calculator {
    add(n1, n2) {
        console.log(n1 + n2);
    }
}
const obj = new Calculator();
obj.add(10, 10);
obj.add(20, 20);
