// clone using object.assign

const obj = {
    key1: "value1",
    key2: "value2"
}

// const obj1={...obj}; //when we are using a spread operator then "key3" value is added in "obj" object only not in obj1
const obj1 = Object.assign({}, obj);
obj.key3 = "value3";
// obj1.key3= "value5";
console.log(obj);
console.log(obj1);