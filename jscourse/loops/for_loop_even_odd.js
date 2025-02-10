/* For loop syntax, understanding and printing
even and odd numbers using loop from 0 to n
number strings with loop.
*/
console.log('Mohammad Bilal Akbar');
for (let i = 0; i < 10; i++) {
    console.log(`${i}.Mohammad Bilal Akbar`);
}
let n = prompt('Please enter the last number to seprate even and odd numbers from 0 to the last number:');
if (isNaN(n) || n < 0) console.log('Please enter a valid positive number.');
else {
    n = Number(n);
    let evenNumbers = [];
    let oddNumbers = [];
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) evenNumbers.push(i);
        else oddNumbers.push(i);
    }
    console.log(`Even numbers: ${evenNumbers.join(', ')}`);
    console.log(`Odd numbers: ${oddNumbers.join(', ')}`);
}

let fullName = 'Muhammad Bilal Akbar';
console.log(fullName.length);
console.log(fullName[2]);
for (let i = 0; i < fullName.length; i++) {
    console.log(fullName[i]);
}
