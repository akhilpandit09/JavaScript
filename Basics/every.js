const numbers = [2,4,6,8,10];

function isEven(number){
    return number % 2 ==0;
}

const ans = numbers.every(isEven); //every() method check all number is even or not is yes then it return true otherwise false
console.log(ans);
