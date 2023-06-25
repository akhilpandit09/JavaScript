// function isEven(number)
// {
//     return number % 2 === 0;
// }

// console.log(isEven(4));

// finding the target number of indexed
function findtarget(array, target)
{
    for(let index=0; index<array.length; index++)
    {
        if(array[index] === target)
        {
            return index;
        }
    }
    return -1;
}

const myarray=[3,5,4,2,6];
console.log(findtarget(myarray,4));
