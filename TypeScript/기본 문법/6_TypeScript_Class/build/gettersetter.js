"use strict";
const fullNameMaxLength = 10;
class Employee2 {
    constructor() {
        this._fullName = null;
    }
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error("fullName has a max length of " + fullNameMaxLength);
        }
        this._fullName = newName;
    }
}
let employee = new Employee2();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
