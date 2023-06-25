const person ={
    firstName:"Akhil",
    gender:"male",
    age:23
}

// function printDetail(obj)
// {
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age);
// }


// now we are using the parameter destructuring 

function printDetail({firstName,gender,age}){
    console.log(firstName);
    console.log(age);
}

printDetail(person);