/* Array
push, pop, update, and remove at index
*/
let fruit = ['Apple', 'Cherry', 'Orange', 23, false];
console.log(fruit);
console.log(fruit[3]);
console.log(fruit[0]);
console.log(fruit[4]);
console.log(fruit.length);
for (let i = 0; i < fruit.length; i++) console.log(fruit[i]);
fruit.push('Banana');
console.log(fruit);
fruit.pop();
console.log(fruit);
fruit[1] = 'Muhammad Bilal Akabr';
console.log(fruit);
fruit.fill('Cherry', 1, 2);
console.log(fruit);
fruit.fill('Muhammad Bilal Akbar', 2, 3);
console.log(fruit);
fruit.splice(0, 2);
console.log(fruit);
fruit.forEach((element) => {
    console.log(element)
});

let students = [
    {
        'name': 'Muhammad Bilal Akbar',
        'dob': '09 September 2000',
        age: 25,
    },
    {
        'name': 'John Wick',
        'dob': '09 November 1997',
        age: 50,
    },
    {
        'name': 'John Dev',
        'dob': '09 November 1995',
        age: 50,
    },
]

for (let i = 0; i < students.length; i++) {
    console.log(students[i].dob);
}

students.forEach((student) => {
    console.log(student.name + ', ' + student.dob);
});

/*
1. Create an array of number and calculate their sum.
2. Create an array of number, find max and min value.
3. Create an array of number, find the number with max frequency.
*/
// 1
let numbers = [2, 3, 1, 5, 2, 3];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    number = numbers[i];
    sum += number;
}
console.log(sum);
sum = 0;
numbers.forEach((number) => {
    sum += number;
});
console.log(sum);
sum = 0;
for (let number of numbers) {
    sum += number;
}
console.log(sum);
let largeArrayOfNumbers = [2, 3, 1, 5, 2, 3, 23, 43, 12, 98, 65, 4, 37, 58, 88];
// let largeArrayOfNumbers = [2, 3, 1, 5, 2, 3];
let max = largeArrayOfNumbers[0];
for (let i of largeArrayOfNumbers) {
    if (max < largeArrayOfNumbers[i]) max = largeArrayOfNumbers[i]
    // else if (min > largeArrayOfNumbers[i]) min = largeArrayOfNumbers[i];
}
console.log(max);
// console.log(min);
