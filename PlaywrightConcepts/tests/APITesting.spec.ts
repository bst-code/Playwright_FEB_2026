import {test, expect, request} from "@playwright/test"

test("Get response from get user api", async ({request})=>{

const res = await request.get("https://api.bsparksoftwaretechnologies.com/api/users")

console.log(res.status());

expect(res.status()).toBe(200)

console.log(res.statusText());
const resBody = await res.json()

console.log(resBody);
console.log(resBody[1]);



console.log(resBody.length);

for(let i = 0; i< resBody.length; i++)
{
    console.log(resBody[i].email);
    console.log(resBody[i].password);
}

})

test.only("Post - Create new user", async ({request})=>{

    const res = await request.post("https://api.bsparksoftwaretechnologies.com/api/users", {
        data:{ 
             "name": "Shivya",
            "email": "shivya@example.com",
            "number": "1112223333",
            "password": "123"}
    })

    console.log(res.status());
    expect(res.status()).toBe(201)
    console.log(res.statusText());

    const resBody = await res.json()
    console.log(resBody);

    console.log(resBody.id);
    console.log(resBody.message);

})


