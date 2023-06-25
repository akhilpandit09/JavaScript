class createuser {
    constructor(firstName, lastName, age)
    {
        console.log("constructor called");
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    about()
    {
        return `my name is ${this.firstName};`
    }

}

const user1 = new createuser("akhil", "pandit", 23);
console.log(user1);
console.log(Object.getPrototypeOf(user1));