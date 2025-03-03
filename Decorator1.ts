//Q14
// Class Decorator
function LogClass<T extends { new (...args: any[]): {}; prototype: any }>(constructor: T): T {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args);
            console.log(`Class ${constructor.prototype.constructor.name} has been instantiated.`);
        }
    };
}

// Applying the decorator to the User class
@LogClass
class User {
    constructor(public username: string) {
        console.log(`User instance created: ${this.username}`);
    }
}

// Creating an instance to trigger the decorator
const user1 = new User("Mahesh");
