const userMethod = {
    about:function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18: function()
    {
        return this.age>=18;
    }

}


function createUser(firstName, lastName, email, age, address)
{
    // const users = {};
    const users = Object.create(userMethod);
    users.firstName=firstName;
    users.lastName=lastName;
    users.email=email;
    users.age=age;
    users.address=address;
    return users;
}

const user1 =  createUser('Akhil','Pandit','akhileshwarpandit0024@gmail.com',23,'Newroad');
const user2 =  createUser('rohit','singh','rohit@gmail.com',25,'dharan');
const user3 =  createUser('suman','kc','suman@gmail.com',27,'thankot');

// store method in different objects
console.log(user1.about()); //here we call about() function in user1 that why it's check firstly users object if not found then it'll check "userMethod()" function if there find then it will print
console.log(user2.about());
console.log(user2.is18());
console.log(user3.about());