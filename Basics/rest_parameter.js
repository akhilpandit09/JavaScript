// const  number = (a,b,...c) =>{
//     console.log("a is ",a);
//     console.log("b is ",b);
//     console.log("c is ",c);
// }
// number(2,3,5,5,6,7,7);

const sum = function (...numbers)
{
    let total=0;
    for(let number of numbers){
        total+=number;
    }
    return total;
}
const ans = sum(1,2,3,4,5);
console.log(ans);