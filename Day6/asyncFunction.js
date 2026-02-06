
async function delay()
{
    return new Promise(resolve => setTimeout(() => {
        resolve()
    }, 5000))
}

async function demo(){

    console.log("Line 1");
    console.log("Line 2");
    console.log("Line 3");
    console.log("Line 4");

    await delay()

    console.log("Line 5");
    

}

demo()