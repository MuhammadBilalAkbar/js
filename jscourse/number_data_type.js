// Strings
// console.log('we are studying string data type.');
// let fullName;
// fullName = 'Mohammad Bilal';
// let fatherName = 'Ghulam Akbar';
// let sentence = 'My name is ' + fullName + ' and my father name is ' + fatherName + '.';
// console.log(sentence);
// console.log(sentence.length);
// console.log(fullName.toLowerCase());
// console.log(fullName.toUpperCase());
// console.log(typeof(fullName));
// console.log(fullName.length);
// console.log(fullName[10]);

// Numbers
// let age = 25.2039845;
// console.log(age);
// console.log(typeof(age));
// let numberOne = 20;
// let numberTwo = 30;
// let sum = 0, sub = 0, multiply = 10000, divide = 20;
// sum = numberOne + numberTwo;
// sub = numberTwo - numberOne;
// multiply = numberOne * numberTwo;
// divide = numberTwo/numberOne;
// let finalSum = 'Sum of two numbers ' + numberOne + ' and ' + numberTwo + ' is ' + sum;
// console.log(finalSum);
// console.log(sub);
// console.log(multiply);
// console.log(divide);

// Number Data Types with questions

// Write Program to Swap Values of Two Variables
// let a = 20;
// let b = 30;
// a = a + b; // 20 + 30 = 50
// b = a - b; // 50 - 30 = 20
// a = a - b; // 50 - 20 = 30
// console.log('value of a is ' + a);
// console.log('value of b is ' + b);

// Write Program to Swap Values of Three variables.
// let x = 3;
// let y = 4;
// let z = 5;
// x = x + y + z; // 3 + 4 + 5 = 12
// z = x - y - z; // 12 - 4 - 5 = 3
// y = x - y - z; // 12 - 4 - 3 = 5
// x = x - y - z; // 12 - 5 - 3 = 4
// console.log('x is ' + x);
// console.log('y is ' + y);
// console.log('z is ' + z);

// Write Program to convert feet to meter and meter into KM
function feetToMeter(feets) {
  const metersPerFoot = 0.3048;
  return feets * metersPerFoot;
}
// Example
// {
//   let feets = 10;
//   let meters = feetToMeter(feets);
//   console.log(feets + ' feets are equal to ' + meters.toFixed(2) + ' meters.');
//   /* or */ console.log(`${feets} feets are equal to ${meters.toFixed(2)} meters.`);
// }
function meterToKilometer(meters) {
  const metersPerKilometer = 1000;
  return meters / metersPerKilometer;
}
const meters = 85963;
const kiloMeters = meterToKilometer(meters);
console.log(`${meters} are equal to ${Math.floor(kiloMeters)} kilometers and ${meters % 1000} meters.`);
//Example
// {
// const meters = 856963;
// const kiloMeters = meterToKilometer(meters);
// console.log(meters + ' meters are equal to ' + kiloMeters.toFixed(2) + ' kilometers.');
// /* or */ console.log(`${meters} meters are equal to ${kiloMeters.toFixed(2)} kilometers.`)
// }

// Write Program to convert celcius to farenheit. formula: (°C × 9/5) + 35
// {
//   const celciusTemp = 25;
//   const farenheitTemp = (celciusTemp * 9 / 5 + 35);
//   console.log(`${celciusTemp} celcius is equal to ${farenheitTemp.toFixed(2)} farenheit.`);
// }

// Write Program to convert farenheit to celcius.
// {
//   const farenheitTemp = 98.6;
//   const celciusTemp = (farenheitTemp - 32) * 5 / 9;
//   console.log(`${farenheitTemp} farenheit is equal to ${celciusTemp.toFixed(2)} celcius.`);
// }

// Write Program to Calculate Area of Circle. formula A=πr2
// {
//   const pi = 22 / 7;
//   const r = 10;
//   const area = pi * r * r;
//   console.log(`Area of circle with radius ${r} is ${area.toFixed(2)}`);
// }

// Write Program to Calculate Area of Square. formula A=a2
// {
//   const lengthOrHeight = 23.67584;
//   const area = lengthOrHeight * lengthOrHeight;
//   console.log(`Area of square with length or height ${lengthOrHeight} is ${area.toFixed(2)}`);
// }

// Write Program to Calculate Area of Rectangle. A=wl
// {
//   const length = 2.67584;
//   const height = 3.3874
//   const areaOfRectangle = length * height;
//   console.log(`Area of square with length ${length} and height ${height} is ${areaOfRectangle.toFixed(2)}`);
// }

// Write Program to convert days to years and weeks
// {
//   const totalDays = 1375;
//   const daysInOneYear = 365;
//   const yearsWithDecimal = totalDays / daysInOneYear;
//   console.log(`yearsWithDecimal: ${yearsWithDecimal}`);
//   const yearsWithWholeNumber = Math.trunc(yearsWithDecimal);
//   const remainingWeeksWithDecimal = (yearsWithDecimal - yearsWithWholeNumber) * 365;
//   console.log(remainingWeeksWithDecimal);
//   const remainingWeeksWithWholeNumber = Math.trunc(remainingWeeksWithDecimal);
//   const remainingDays = (remainingWeeksWithDecimal - remainingWeeksWithWholeNumber) * 7;
//   console.log(`${remainingDays} remainingDays`);
//   console.log(`${totalDays} days are equal to ${yearsWithWholeNumber} years and ${remainingWeeksWithWholeNumber} weeks and ${remainingDays} days.`);
// }
// Provided by ChatGPT
{
  // const totalDays = 1375;
  // const daysInOneYear = 365;
  // const daysInOneMonth = 30; // Approximation
  // const daysInOneWeek = 7;

  // // Calculate years
  // const years = Math.floor(totalDays / daysInOneYear);
  // let remainingDays = totalDays % daysInOneYear;

  // // Calculate months
  // const months = Math.floor(remainingDays / daysInOneMonth);
  // remainingDays %= daysInOneMonth;
  // // remainingDays = remainingDays%daysInOneMonth;


  // // Calculate weeks
  // const weeks = Math.floor(remainingDays / daysInOneWeek);
  // remainingDays %= daysInOneWeek;
  // // remainingDays = remainingDays%daysInOneWeek;

  // // Remaining days are now correctly calculated
  // console.log(`${totalDays} days are equal to ${years} years, ${months} months, ${weeks} weeks, and ${remainingDays} days.`);
}
// Now by myself
// {
//   const totalDays = 785877;
//   const daysInOneYear = 365;
//   const daysInOneMonth = 30;
//   const daysInOneWeek = 7;

//   // Years
//   const years = Math.floor(totalDays / daysInOneYear);
//   let remainingDays = totalDays % daysInOneYear;
//   const months = Math.floor(remainingDays / daysInOneMonth)
//   remainingDays %= daysInOneMonth;
//   const weeks = Math.floor(remainingDays / daysInOneWeek);
//   remainingDays %= daysInOneWeek;

//   console.log(`${totalDays} days are equal to ${years} years, ${months} months, ${weeks} weeks, and ${remainingDays} days.`)
// }

var x = 5; // Initialize x
var y;

// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x + " " + y;           // Display x and y
console.log(x + ' ' + y);

y = 7; // Initialize y