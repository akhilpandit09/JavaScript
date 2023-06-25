const person = new Map();
person.set("firstName", "Akhil");
person.set("age",23);
person.set("Hobbies",['coding','reading']);

console.log(person);
// console.log(person.get('firstName'));

for(let key of person.keys())
{
    console.log(key, typeof key);
}

console.log('\n');


// second method to use map in data structure
const person1 = {
    id:1,
    firstName:"Akhil"
}
const extraInfo = new Map();
extraInfo.set(person1,{
    age:23, gender:"Male"
});

console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person1).age);



// another way to store data in map
console.log('\n');
const personInfo = new Map([['firstName','Akhil'],['gender','male']]);
console.log(personInfo)