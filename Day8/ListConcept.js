let Name = "Bala"


// LIST --> Array
let names = ["Bala", "John", "Vijay", "Bala",23, true]
console.log(names);
console.log(typeof (names));

//to get data from specific index
console.log(names[2]);

//update the list
names[4] = 27
console.log(names);

//size
console.log(names.length); //6

//adding new data to existing list object 

names.push("Shivya") // add at end of list
console.log(names);

names.unshift("Kumar") // adds the data at front of list
console.log(names);

//to delete the data 
names.pop() //Removes the last element from an array and returns it.
console.log(names);
names.shift() //Removes the first element from an array and returns it.
console.log(names);


//traversing using for loop
for(let i = 0; i<names.length; i++)
{
    console.log('welcome ',names[i]);
}