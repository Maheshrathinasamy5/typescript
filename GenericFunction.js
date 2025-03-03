"use strict";
//Q5
function identity(value) {
    return value;
}
// Calling the generic function with different types
console.log(identity("Hello, TypeScript!"));
console.log(identity(42));
console.log(identity(true));
