let a = 21;
let remainder = a % 2;
if (remainder == 0) {
    console.log(`${a} is an even number.`);
}
if (remainder != 0) {
    console.log(`${a} is an odd number.`);
}

let age = 17;
// if (age < 18) console.log('You are not an adult.');
// if (age > 18) console.log('You are an adult.');
if (age < 18) console.log('Yoau are not an adult.')
else console.log('You are an adult.');

let b = 20;
// let op = '+';
// let op = '-';
// let op = '*';
let op = prompt('Enter operation: ');
if (op == '+') { console.log(`a + b: ${a + b}`); }
else if (op == '-') console.log(`a - b: ${a - b}`);
else if (op == '*') console.log(`a * b: ${a * b}`);
else if (op == '/') console.log(`a / b: ${a / b}`);
