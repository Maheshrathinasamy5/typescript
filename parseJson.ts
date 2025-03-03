//Q16
function parseJson(jsonString: string): any {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Error parsing JSON:", error.message);
        return null;
    }
}

// Example usage:
const validJson = '{"name": "John", "age": 30}';
const invalidJson = '{"name": "John", "age": 30';  // Missing closing brace

console.log(parseJson(validJson));  // { name: "John", age: 30 }
console.log(parseJson(invalidJson));  // Error parsing JSON: Unexpected end of JSON input
