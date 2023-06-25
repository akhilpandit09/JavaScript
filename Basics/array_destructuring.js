const myarray=["value1", "value2","value3"];

// let myvar1=myarray[0];
// let myvar2=myarray[1];
// let myvar3=myarray[2];
// console.log(myvar1);
// console.log(myvar2);
// console.log(myvar3);


//applying array destructuring
// let [myvar1,...mynewarray]=myarray;
let [myvar1, , myvar2]=myarray;
console.log(myvar1);
console.log(myvar2);
// console.log(mynewarray);
