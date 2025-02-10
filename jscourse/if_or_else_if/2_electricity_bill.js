/* Electricity Bill */
let units = prompt('Enter units to get your electricity bill: ');
if (isNaN(units) || units < 0) alert("Invalid input. Please enter a positive number.");
else if (units <= 100) console.log(`Your electricity bill is: ${units * 8}`);
else if (units > 100 && units <= 200) console.log(`Your electricity bill is: ${units * 12}`);
else if (units > 200 && units <= 300) console.log(`You electricity bill is: ${units * 15}`);
else if (units > 300) console.log(`You electricity bill is: ${units * 20}`);
else console.log('Something went wrong!!!');
