function myFunc2(name)
{
    console.log("inside my func 2");
    console.log(`your name is ${name}`);
}

function myFunc(callback)
{
    console.log("hello i am myFunc function");
    callback("Akhileshwar");
}

myFunc(myFunc2);