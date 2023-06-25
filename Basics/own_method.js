function personInfo()
{
    console.log(`My name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName: "Akhil",
    age:23,
    about: personInfo
}
const person2 = {
    firstName: "Rohit",
    age:24,
    about:personInfo
}
const person3 = {
    firstName: "Surya",
    age:25,
    about: personInfo
}

person1.about();
person2.about();
person3.about();