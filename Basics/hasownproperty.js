function CreateUser (firstName, lastName, age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
};

CreateUser.prototype.about = function(){
    return `My name is ${this.firstName} ${this.lastName} and i'm ${this.age} years old`;
}

const user1 = new CreateUser("Akhil", "pandit", 23);

for (let key in user1){
    if(user1.hasOwnProperty(key))
    {
        console.log(key);
    }
}