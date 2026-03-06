class calculator
{


    n1: number = 1
    n2: number = 2

    constructor();
    constructor(i:number, j:number)

    constructor(i?:number, j?:number)
    {
        if(i !==undefined && j !==undefined)
        {
            this.n1 = i;
            this.n2 = j
        }else
            {
        console.log("Iam constructor without variable");
        }
        
    }


    add():void
    {
        console.log(this.n1 + this.n2);
        
    }

}

const cal = new calculator(11,22)
cal.add();