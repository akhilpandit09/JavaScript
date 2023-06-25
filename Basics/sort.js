const products =[
    {productId:1, productName:"p1", price:4000},
    {productId:2, productName:"p2", price:6000},
    {productId:3, productName:"p3", price:3000},
    {productId:4, productName:"p4", price:4000},
    {productId:5, productName:"p5", price:37000}
]

// const sorted = products.sort((a,b) => {
//     return a.price - b.price;
// } )

const increasing = products.sort((a,b) => a.price-b.price); //increasing order

const decreasing = products.sort((a,b) => b.price-a.price); //decreasing order

console.log(increasing);
console.log(decreasing);
