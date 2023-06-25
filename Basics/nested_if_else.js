
const prompt = require(`prompt-sync`)();

// let num1 = +prompt("Enter a first number");
// let num2 = +prompt("Enter a second number");
// console.log(num1+num2, typeof num1, typeof num2);

let winning_number=19;
let userguess = +prompt("Guess a number");
if(userguess === 19)
{
    console.log("Guess is right");
}else{
    if(userguess<winning_number)
    {
        console.log("too low..!!");
    }else{
        console.log("too high..!!");
    }
}