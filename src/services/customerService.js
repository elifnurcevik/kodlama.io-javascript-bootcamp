import UserService from "./userService.js";

export default class CustomerService extends UserService {
    constructor(loggerService) {
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }

    load() {
        if (!this.checkCustomerValidityForErrors(user)) {
            this.customers.push(user)
        }
    }
}