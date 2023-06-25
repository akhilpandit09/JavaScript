// for of loop in array

const fruits=["apple","banana","grapes"];
let fruit2=[];
for(let fruit of fruits){
    console.log(fruit);
    console.log(fruit.toUpperCase());
    fruit2.push(fruit);
}
console.log(fruit2);



//for in loop

for (let index in fruits)
{
    console.log(fruits[index].toUpperCase());
}