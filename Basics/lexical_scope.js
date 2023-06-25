// lexical scope (local and global scope)

// local scope 
// function myapp(){
//     const newval="value";
//     const newapp = function(){
//         const newval="value1";
//         console.log(newval);
//     }
//     newapp();
//     console.log("myapp");
// }
// myapp();


//global scope
const newval="value";
function myapp(){
    // newapp function inside the myapp function
    const newapp = function(){
        // coreapp function inside the newapp function 
        const coreapp =()=>{
            // newvall access the value from globally
            console.log(newval);
        }
        coreapp();
    }
    newapp();
    console.log("myapp");
}
myapp();