const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// square bracket method to computed the object
const obj ={
    [key1]:"myvalue1",
    [key2]:"myvalue2"
}
console.log(obj);

// other method to computed the object- refrence data type 
const obj1 = {};

obj1[key1]=value1;
obj1[key2]= value2;
console.log(obj1);