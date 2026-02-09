
// 40 members - 2

for(let i = 1; i<=40;i++)
{
    console.log("Sweet", i);
}

// 20 sweets -- break statement
for(let i = 1; i<=40;i++)
{
    console.log("Sweet", i);

    if(i == 20)
    {
        break
    }
}

// Skip rollno 21 -- continue statement
for(let i = 1; i<=40;i++)
{
    if(i == 21 || i == 31 || i == 11)
    {
        continue
    }
    console.log("Sweet", i);
}



