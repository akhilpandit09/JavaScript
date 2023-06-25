const obj1 ={
    key1:"value1",
    key2:"value2"
}
const obj2={
    key3:"value3",
    key4:"value4"
}

const newobject = {...obj1,...obj2, "key55":"value55"};
console.log(newobject);

const newarray={..."abc"};
console.log(newarray);