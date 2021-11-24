let num1 = 10
let student = {id:1, name:"Elif"}
//console.log(student);

function save(student,score=10) {
    //console.log(student.name + " : " + score)
}
save(student,100);

let students = ["Elif nur Çevik","Oğuzhan Çevik ","Talha Çevik","Abdullah Çevik"]

//console.log(students)

let students2 = [student,{id:5, name:"Kadriye"},"Ankara",{city:"İstanbul"}]
//console.log(students2)

//rest --> geriye kalan parametreler
//params   <csharp>
//varArgs  <java>
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products[0])    
}
//console.log(typeof showProducts)
//showProducts(10,["apple","banana","strawberry"])

//spread --> ayrıştırmak, ayırarak yazar 
let points = [1,2,3,4,59,98,6]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructuring
let populations = [10000,20000,30000,[40000,10000]]
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations)

let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)