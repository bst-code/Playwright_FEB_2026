//For loop
for(let i = 1; i<=40; i++)
//for(let i =40; i>=1; i--)
{
    console.log("Take sweets", i);
    if(i==20)
    {
        break;
    } 
}

for(let i = 1; i<=40; i++)
//for(let i =40; i>=1; i--)
{
    if(i==20)
    {
        continue
    }
    console.log("Take sweets", i);
}