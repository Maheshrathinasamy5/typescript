function parseJson(jsonString) {
    try {
        return JSON.parse(jsonString);
    }
    catch (error) {
        console.error("Error parsing JSON:", error.message);
        return null;
    }
}
// Example usage:
var validJson = '{"name": "John", "age": 30}';
var invalidJson = '{"name": "John", "age": 30'; // Missing closing brace
console.log(parseJson(validJson)); // { name: "John", age: 30 }
console.log(parseJson(invalidJson)); // Error parsing JSON: Unexpected end of JSON input
