const prompt = require("prompt-sync")();


let day = +prompt("Enter a day in number:");

switch(day)
{
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break; 
    case 4:
        console.log("Wednesday");
        break;
        
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    default:
        console.log("Invalid");
        break;
}