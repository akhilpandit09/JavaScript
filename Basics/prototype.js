function hello()
{
    console.log("hello");
}

const object = {};

if(hello.prototype)
{
    console.log("In function, prototype is present");
}
else{
    console.log("In function, prototype is not present");
}

if(object.prototype)
{
    console.log("In object, prototype is present");
}
else{
    console.log("In object, prototype is not present");
}

// how to use prototype => basically prototype is simple object or free object provided by function

hello.prototype.abc="abc";
console.log(hello.prototype);

hello.prototype.func = function()
{
    return "this is prototype function";
};
console.log(hello.prototype.func());