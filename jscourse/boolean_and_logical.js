// == checks for equality after converting types, which can lead to unexpected results.
// Using ==
5 == "5";      // true (type coercion)
null == undefined; // true (both loosely equal)
false == 0;    // true (false coerced to 0)

// Use === to compare both value and type without any type conversion.
// Using ===
5 === "5";      // false (different types)
null === undefined; // false (different types)
false === 0;    // false (different types)

let isLogin = false;
isLogin = true;
console.log(isLogin);
console.log(typeof (isLogin));
let c = 20, d = 30;
console.log(c > d);
console.log(c >= d);
console.log(c <= d);
let e = 30;
console.log(d == 'e');
let myName = 'Bilal';
let name2 = 'Bilal';
console.log(myName == name2);

// Equal to (type conversion allowed)
// It allows type conversion (or coercion), meaning it will try to convert the values being compared to the same type before checking for equality.
console.log(5 == 5); // true
console.log(5 == '5'); // true
// Strict equal to (no type conversion)
console.log(5 === 5); // true
console.log(5 === '5'); // false
// Not equal to (type conversion allowed)
console.log(5 != 5); // false
console.log(5 != '5'); // false
console.log(5 !== 5); // false
console.log(5 !== '5'); // true


let a = 20;
let b = 25;

let conditionOne = a == 20;
let conditionTwo = b == 22;
let result = conditionOne && conditionTwo;
console.log(`result: ${result}`);
console.log(`result: ${(a == 20 && b == 22)}`);
result = conditionOne || conditionTwo;
console.log(`result: ${result}`);
console.log(`result: ${(a == 20 || b == 22)}`);
let x = 20;
result = (a == 20 || b == 22) && a == 20;
console.log(`result: ${result}`);
