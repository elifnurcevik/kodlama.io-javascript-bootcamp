import { BaseLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

//console.log("User component yüklendi")

let logger = new BaseLogger()
let userService = new UserService(logger)

let user1 = new User(1, "Elif", "Çevik", "Van")
let user2 = new User(2, "Oğuzhan", "Çevik", "İstanbul")
//userService.add(user1)
//userService.add(user2)

//console.log(userService.list());
//console.log(userService.getById(2));


//userService.add(user1)
//userService.getById(1)
//userService.list()


let customer = { id: 1, firstName: "Elif" }

//prototyping
customer.lastName = "Çevik"

//console.log(customer.lastName)

//console.log("-----------------");

//-----------------------------------------------------------

userService.load()

let customerToAdd = new Customer(6, "Abdullah", "Çevik", "İzmir", "bncg")
customerToAdd.type = "customer"


userService.add(customerToAdd)
console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);
console.log(userService.getCustomersSorted());