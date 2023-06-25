function createUser(firstName, lastName, email, age, address)
{
    const users = {};
    users.firstName=firstName;
    users.lastName=lastName;
    users.email=email;
    users.age=age;
    users.address=address;
    users.about = function(){
        return `${this.firstName} is ${this.age} years old`;
    };
    users.is18 = function()
    {
        return this.age>=18;
    }
    return users;
}

const ans =  createUser('Akhil','Pandit','akhileshwarpandit0024@gmail.com',23,'Newroad');
console.log(ans);

const ans1 = ans.about(); //this function should return the value and store in ans1
console.log(ans1);

const ans2 = ans.is18();
console.log(ans2);