//Q17
function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Cannot divide by zero");
    }
    return numerator / denominator;
}
// Example usage:
try {
    console.log(divideNumbers(10, 2)); 
    console.log(divideNumbers(10, 0)); 
}
catch (error) {
    console.error(error.message);
}
