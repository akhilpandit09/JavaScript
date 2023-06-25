function createUser(firstName, lastName, email, age, address)
{
    const users = Object.create(createUser.prototype);
    users.firstName=firstName;
    users.lastName=lastName;
    users.email=email;
    users.age=age;
    users.address=address;
    return users;
}

createUser.prototype.about =function(){
    return `${this.firstName} is ${this.age} years old`;
};
createUser.prototype.is18 = function()
{
    return this.age>=18;
};

const user1 =  createUser('Akhil','Pandit','akhileshwarpandit0024@gmail.com',23,'Newroad');
const user2 =  createUser('rohit','singh','rohit@gmail.com',25,'dharan');
const user3 =  createUser('suman','kc','suman@gmail.com',27,'thankot');

// store method in different objects
console.log(user1.about());
console.log(user2.is18());
console.log(user3.about());