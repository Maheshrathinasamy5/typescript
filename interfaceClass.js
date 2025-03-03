"use strict";
class Employee {
    constructor(name, age, employeeId) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }
    getEmployeeDetails() {
        return `Employee ID: ${this.employeeId}, Name: ${this.name}, Age: ${this.age}`;
    }
}
// Creating an instance and printing details
const emp = new Employee("Alice", 30, 101);
console.log(emp.getEmployeeDetails());
