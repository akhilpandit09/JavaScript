const myArray = ["item1","item2","item3"];

const deleted_items = myArray.splice(1,2,"inserted item1", "inserted item2");
console.log("Deleted items: ",deleted_items);
console.log("New array items:",myArray);