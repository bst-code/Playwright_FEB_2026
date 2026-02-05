let browser = "Safari" // actual data


if( browser == "Chrome") //expected data
    {
        console.log("Chrome Browser opened");
        
    }
else if(browser == "Firefox")
    {
         console.log("Firefox Browser opened");
    }
else if(browser == "Safari")
    {
         console.log("Safari Browser opened");
    }
else
    {
        console.log("Please enter windows machine supported browser only");  
    }


    //strict equality ===
    // == Check only data 
    // === check for dataType and data 

let age = "10"
if (age === 10)
{
    console.log("Iam 10 year old");
    
}else
    {
        console.log("Please enter valid age");
        
    }