const person = {
    name:"Akhil",
    age:23,
    "person hobbies":["reading","coding","travelling"]
}
// for (let key in person)
// {
//     console.log(key); //only keys
//     console.log(person[key]); //only values
//     console.log(`${key} : ${person[key]}`); //both keys and values pairs
//     console.log(key,":",person[key]);
// }



// object.keys

console.log(typeof (Object.keys(person)));
const val = Array.isArray((Object.keys(person))); //check the given object is array or not
console.log(val);


for (let key of Object.keys(person))
{
    console.log(key,":",person[key]);
}