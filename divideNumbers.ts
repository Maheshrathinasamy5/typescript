//Q17
function divideNumbers(numerator: number, denominator: number): number {
    if (denominator === 0) {
        throw new Error("Cannot divide by zero");
    }
    return numerator / denominator;
}

// Example usage:
try {
    console.log(divideNumbers(10, 2));  // 5
    console.log(divideNumbers(10, 0));  // Throws error: Cannot divide by zero
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error("An unknown error occurred");
    }
}
