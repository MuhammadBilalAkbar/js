/*Write a program using for loop to display the cube of the number up to an integer.*/
let n = prompt('Enter a number to get the cube:');
if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid positive integer.");
}
else {
    console.log(`Cubes of numbers from 1 to ${n}:`);
    for (let i = 1; i <= n; i++) {
        console.log(`The cube of ${i} is ${i ** 3}`);
    }
}
