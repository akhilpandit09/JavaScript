class person
{
    constructor(firstName, lastName, age)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    get fullName ()
    {
        return `${this.firstName} and ${this.lastName}`;
    }
    set fullName(fullName)
    {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName=firstName;
        this.lastName=lastName;
    }
}

const person1 = new person ("Akhil","pandit", 23);
person1.fullName="Akhileshwar pandit";
console.log(person1);
console.log(person1.fullName);