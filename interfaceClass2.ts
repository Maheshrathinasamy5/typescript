//Q4
interface Vehicle {
    startEngine(): void;
}

class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    startEngine(): void {
        console.log(`${this.make} ${this.model} (Year: ${this.year}) engine started!`);
    }
}

// Creating an instance and starting the engine
const myCar = new Car("Tesla", "Model S", 2024);
myCar.startEngine();
