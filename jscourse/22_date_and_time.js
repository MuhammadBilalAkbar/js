const date = new Date();
console.log(date);
console.log(date.toLocaleDateString());

// Get 4 components of a date
console.log(`Year: ${date.getFullYear()}`);
console.log(`Month: ${date.getMonth()}`); // 0 based
console.log(`Date: ${date.getDate()}`);
console.log(`Day of the week: ${date.getDay()}`); // 0 = sunday, 6 = saturday
console.log(`Hours: ${date.getHours()}`);
console.log(`Minutes: ${date.getMinutes()}`);
console.log(`Seconds: ${date.getSeconds()}`);
console.log(`Milliseconds: ${date.getMilliseconds()}`);

const datee = new Date(2023, 1, 14, 22, 56, 40, 500);
datee.setFullYear(2021);
datee.setMonth(15);
console.log(datee);

let date1 = new Date('2023-12-31');
let date2 = new Date('2023-12-25');
if (date1 < date2) console.log('date1 is earlier than date2.');
else console.log('date1 is later than or equal to date2.');
let date3 = new Date(2023, 12, 25);
let date4 = new Date(2023, 12, 31);
if (date3 < date4) console.log('date1 is earlier than date2.');
else console.log('date1 is later than or equal to date2.');
