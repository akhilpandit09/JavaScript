const person={
    name:"Akhileshwar",
    age:23,
    address:"new road"
}

let {name,...rest}=person;
console.log(name);
console.log(rest);