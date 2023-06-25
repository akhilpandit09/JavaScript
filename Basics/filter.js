const numbers=[1,2,3,4,5,6,7,8];

// const isEven = function(numbers){
//     return numbers%2===0;
// }

// const myNumber = numbers.filter(isEven);
// console.log(myNumber);

const evenNumber = numbers.filter((number) =>{
    return number % 2 === 0;
});
console.log(evenNumber);