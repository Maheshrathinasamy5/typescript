// Q6
enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

function getColorName(color: Color): string {
    return `Selected Color: ${color}`;
}

// Using the function with different enum values
console.log(getColorName(Color.Red));
console.log(getColorName(Color.Green));
console.log(getColorName(Color.Blue));
