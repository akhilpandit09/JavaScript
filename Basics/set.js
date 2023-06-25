const myArray = [1,2,3,3,5,4,4];

const uniqueItems = new Set(myArray);

console.log(uniqueItems);

let length =0;
for (let element of uniqueItems)
{
    length++;
}
console.log(length);