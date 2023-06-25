
// objects inside the array
const person_detail =[
    {userid:1, name:"akhil", age:23},
    {userid:2, name:"ram", age:24},
    {userid:3, name:"shyam", age:25},
]
console.log(person_detail);

// nested destructuring

let [{name:user1name}, ,{age:user3age}]=person_detail;
console.log(user1name);
console.log(user3age);
