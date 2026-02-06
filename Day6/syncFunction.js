function demo()
{
    console.log("Line 1");
    console.log("Line 2");
    console.log("Line 3");
    console.log("Line 4");
    setTimeout(()=>{
         console.log("Line 5");
    }, 5000)
   
    console.log("Line 6"); 
}

demo()