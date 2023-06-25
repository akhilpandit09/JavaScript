// we add set default parameter manually

// const sum =(a,b) =>{
//     if(typeof b === "undefined")
//     {
//         b=0;
//     }
//     return a+b;
// }
// console.log(sum(4));


const sum =(a,b=0) =>{
    return a+b;
}
console.log(sum(6,6));