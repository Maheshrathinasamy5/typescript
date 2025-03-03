//Q3 
interface Person {
    name: string;
    age: number;
}

class Employee implements Person {
    name: string;
    age: number;
    employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }

    getEmployeeDetails(): string {
        return `Employee ID: ${this.employeeId}, Name: ${this.name}, Age: ${this.age}`;
    }
}

// Creating an instance and printing details
const emp = new Employee("Alice", 30, 101);
console.log(emp.getEmployeeDetails());
