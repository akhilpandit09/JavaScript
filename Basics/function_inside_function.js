//using arrow function inside this function we are constucting many functions

const app = () =>{
    const sum = (num1, num2) =>{
        return num1+num2;
    }
    console.log(sum(5,6));
    console.log("Inside app");
}
app();