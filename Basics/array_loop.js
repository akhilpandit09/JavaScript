let fruit=["apple","mango","grapes"];

console.log(fruit.length-1);

let fruit2=[];
for(let i=0;i<fruit.length;i++)
{
    // console.log(fruit[i]); //display array item 
    // console.log(fruit[i].toUpperCase()); //display items in uppercase 
    fruit2.push(fruit[i].toUpperCase()); //store items in new array fruit2
}
console.log(fruit2);