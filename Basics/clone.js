let array1=["item1","item2"];

// slice operator
let array2= array1.slice(0);
console.log(array2);

// concatentation 
let array3=[].concat(array1,"item3");
console.log(array3);


// new way- spread operator
let array4=[...array1, ...array2,...array3];
console.log(array4);