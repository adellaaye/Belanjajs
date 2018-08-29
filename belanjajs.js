let cart = []
let list = [
    {Name: "sayur", price: 3000},
    {Name: "buah",  price: 10000},
    {Name: "mie",   price: 2000},
    {Name: "ayam",  price: 40000}
]
let oncart = cart.concat(list)
let total  = oncart.length
let total_price = oncart.map(oncart => oncart.price)

console.log(oncart)


const reducer = ( accumulator, currentValue) => accumulator + currentValue
console.log("amoun " + total + " with total price " + total_price.reduce(reducer) )


