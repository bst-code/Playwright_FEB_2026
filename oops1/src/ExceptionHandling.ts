//Exception ---> Error 
//1. Compile Time or checked Exception -- Syntex error
//2. Runtime  or unchecked exception --> try catch and finally

class demo {

    age: number = 20
    numbers: number[] = [1, 2, 3, 4, 5]

    getData() {

        try {
            console.log(this.numbers[0].toString());
        }
        catch (error) {
            console.log("Please enter value less than ",this.numbers.length); 
        }
        finally
        {
            console.log("Finally will run always");
            
        }
    }






}

const d = new demo()
d.getData()