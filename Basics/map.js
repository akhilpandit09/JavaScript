// const  numbers = [1,2,3,4];

// const squarenumber = numbers.map((number, index) =>{
//     // return `index: ${index}, number: ${number*number}`;
//     return index;
// });

// console.log(squarenumber);


const persons =[
    {firstName:"Akhil", age:23},
    {firstName:"Anik", age:22},
    {firstName:"Anil", age:25}
]

const userName= persons.map((user) => {
    return user.firstName;

})

console.log(userName);