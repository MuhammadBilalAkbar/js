// some syntax => array.some(callback(element, index, array), thisArg);
/*Checks if at least one element in the array satisfies the given condition.
Returns true if any element meets the condition; otherwise, returns false.*/
const numbers = [2, 4, 6, 8, 10];
const hasOddNumber = numbers.some(num => num % 2 !== 0);
console.log(`hasOddNumber: ${hasOddNumber}`); // false (no odd numbers)
const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(`hasEvenNumber: ${hasEvenNumber}`); // true (all numbers even)


// splice syntax => array.splice(start, deleteCount, item1, item2, ...)
/*Changes the contents of an array by removing, replacing, or adding elements.
Modifies the original array and returns the removed elements.*/
let fruits = ['apple', 'banana', 'cherry', 'date'];
console.log(fruits);

// Remove 1 element at index 2
let removed = fruits.splice(2, 1);
console.log(fruits); // Output: ['apple', 'banana', 'date']
console.log(removed); // Output: ['cherry']

// Add elements at index 1
fruits.splice(1, 0, 'blueberry', 'coconut');
console.log(fruits);

// Replace 1 element at index 3
fruits.splice(3, 1, 'grape');
console.log(fruits);


// every syntax => array.every(callback(element, index, array), thisArg)
/*Checks if all elements in the array satisfy the given condition.
Returns true only if all elements meet the condition.*/
let numberss = [2, 4, 6, 8, 10];
// Check if all elements are even
let allEven = numberss.every(num => num % 2 === 0);
console.log(allEven);

let mixedNumbers = [2, 4, 6, 7, 10];
let allEvenMixed = mixedNumbers.every(num => num % 2 === 0);
console.log(allEvenMixed); // Output: false
const allGreaterThanFive = numbers.every(num => num > 5);
console.log(allGreaterThanFive); // Output: false


// join syntax => array.join(separator)
// Converts an array into a string, joining elements with a specified separator.
let fruitss = ['apple', 'banana', 'cherry'];
console.log(fruitss);
let result1 = fruitss.join(); //apple,banana,cherry
let result2 = fruitss.join(', '); //apple, banana, cherry
let result3 = fruitss.join('');//applebananacherry
let result4 = fruitss.join(' - ');//apple - banana - cherry
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);


/*
Summary of all methods
some: Use to check if at least one element meets a condition.
splice: Use to add, remove, or replace elements in an array.
every: Use to check if all elements meet a condition.
join: Use to convert an array into a string with a custom separator.
*/