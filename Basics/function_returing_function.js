// function returing function

// function myFunc()
// {
//     function hello()
//     {
//         console.log("hello world");
//     }
//     return hello;
// }
// const ans = myFunc();
// ans();


function myFunc()
{
    return function hello()
    {
        return "hello my world";
    }
}
const ans = myFunc();
console.log(ans()); 