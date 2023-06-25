const userCart =[
    {productid:1, productName:"Mobile", price:12000},
    {productid:2, productName:"Laptop", price:22000},
    {productid:3, productName:"TV", price:15000}
]

const totalAmount = userCart.reduce((totalPrice, currentProduct) =>{
    return totalPrice + currentProduct.price;
}, 0);

console.log(totalAmount);