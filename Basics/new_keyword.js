function CreateUser (firstName, lastName, age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
};

CreateUser.prototype.about = function(){
    return `My name is ${this.firstName} ${this.lastName} and i'm ${this.age} years old`;
}

const user1 = new CreateUser("Akhil", "pandit", 23);
console.log(user1);
console.log(user1.about());