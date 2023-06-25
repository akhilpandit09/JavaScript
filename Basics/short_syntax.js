const person =
{
    firstName:"Akhil",
    age:23,
    about()
    {
        console.log(`My name is ${this.firstName} and age is ${this.age}`);
    }
}

person.about();