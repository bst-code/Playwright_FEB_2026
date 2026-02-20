//Set --> No duplicate, any data type, Faster

//const names = new Set(["Bala","John", "Shivya", "Bala"]) 

const names = new Set();
names.add("Bala")
names.add("John")
names.add("shivya")
names.add("John")
names.add(36)
names.add(true)
console.log(names);
console.log(names.has("Sri"));
names.delete(36)
console.log(names);
console.log(names.size);
//names.clear()
//console.log(names);

for(let n of names)
{
    console.log(n);   
}

//or

names.forEach(n => console.log(n));

//Assignment 
//1. Remove duplicates from list without set
//2. Remove duplicates from list with set
