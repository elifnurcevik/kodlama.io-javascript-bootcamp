function addToCart(productName, quantity) {
    console.log("Sepete eklendi: product: " + productName + " quantity: " + quantity)
}
addToCart("Elma", 5)
addToCart("Yumurta", 10)
addToCart("Karpuz", 2)

let sayHello = () => {
    console.log("Hello World")
}
sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}
sayHello2()

function addToCart2(productName, quantity, unitPrice) {

}
addToCart("Elma", 5, 7)
addToCart("Yumurta", 10, 9)
addToCart("Karpuz", 2, 11)

let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 }

function addToCart3(product) {
    console.log("Ürün: " + product.productName)
    console.log("Adet: " + product.quantity)
    console.log("Fiyat: " + product.unitPrice)
}

addToCart3(product1)

let product2 = { productName: "Elma", unitPrice: 10, quantity: 5 }
let product3 = { productName: "Elma", unitPrice: 10, quantity: 5 }
product2 = product3
product2.productName = "Karpuz"
console.log(product3.productName)

function addToCart4(products) {
    console.log(products)
}

let products = [
    { productName: "Elma", unitPrice: 10, quantity: 5 },
    { productName: "Armut", unitPrice: 10, quantity: 5 },
    { productName: "Karpuz", unitPrice: 10, quantity: 5 }
]
addToCart4(products)
// spreed >>> ayırır        rest >>> toparlar
function add(bisey, ...numbers) { // rest operatörü (toparlar) >> her zaman fonksiyonun sonuna bırak
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}
add(20, 30)
//add(20,30,40)
//add(20,30,40,50)

let numbers = [30, 10, 500, 600, 120]
//console.log(...numbers)
console.log(Math.max(...numbers))

/* let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population = "20M"},
    {name:"Marmara", population = "30M"},
    {name:"Karadeniz", population = "10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
] */
//console.log(icAnadolu.name)
//console.log(icAnadolu.population)
//console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({ productName: newProductName, unitPrice: newUnitPrice, quantity: newQuantity }
    = { productName: "Elma", unitPrice: 10, quantity: 5 })

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
