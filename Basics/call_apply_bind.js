// call, apply, bind method

function about(fav_color, lucky_num)
    {
        console.log(this.firstName, this.age, fav_color, lucky_num);
    }

const user1 = {
    firstName:"Akhil",
    age:23
}
const user2 = {
    firstName:"rohit",
    age:23
}
// call method to write seperately
about.call(user2, "red", 2);


// apply method to write argument at once
about.apply(user1, ["white", 5]);



// apply bind method basically return the method

const ans = about.bind(user2,"blue",44);
ans();



console.log("\n Don't do this mistake\n");

const personInfo = {
    firstName:"Akhil",
    age:23,
    about: function (fav_color, lucky_num)
    {
        console.log(this.firstName, this.age, fav_color, lucky_num);
    }

}

// we just bind the key value function by using bind() method
const store_refrence = personInfo.about.bind(personInfo,"purple",2);
store_refrence();