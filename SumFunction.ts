// Q9 - Arrow Function for Summing Array

const sum = (numbers: number[]): number => numbers.reduce((acc, num) => acc + num, 0);

// Testing the function
console.log(sum([1, 2, 3, 4, 5])); 
console.log(sum([10, 20, 30]));    
