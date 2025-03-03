"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    startEngine() {
        console.log(`${this.make} ${this.model} (Year: ${this.year}) engine started!`);
    }
}
// Creating an instance and starting the engine
const myCar = new Car("Tesla", "Model S", 2024);
myCar.startEngine();
