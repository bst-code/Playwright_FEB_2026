class Calculator
{

    //Variable
   i: number = 10
   j: number = 20

   k1:number = 0;
   k2:number = 0;

   constructor()
   {
    console.log("Iam constructor");
    this.k1 = 10
    this.k2 = 2
   }

  //functions
     add():void
     {
        console.log(this.i + this.j); 
     }

    static sub(n1:number, n2:number):void
     {
        console.log(n1-n2); 
     }

    multi(n1:number, n2:number):number
     {
        let output = n1*n2
        console.log(output); 
        return output
     }

    divide():void
     {
        console.log(this.k1 / this.k2);
        
     }
}

//Create Object 
const cal = new Calculator()
cal.add()
cal.add()
Calculator.sub(30,50) // static method can be accessed without object
const value = cal.multi(4,2)
console.log("Multiple value is ", value);
cal.divide()
