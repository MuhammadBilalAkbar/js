/*Create a program that calculates ticket prices for a movie based on age:

Children (under 12) get a 50% discount
Seniors (60+) get a 30% discount
Regular price for everyone else.
Practice: Use if, else if, and else to determine the ticket price based on the user's age.*/

let age = prompt('Enter you age: ');
age = Number(age);
let ticketPrice = 500;
if (isNaN(age) || age < 0) console.log('Please enter a valid age.');
else if (age <= 12) {
    ticketPrice *= 0.50; // 50% discount
    console.log(`Your ticket price with your ${age} age is Rs.${ticketPrice}.`);
} else if (age >= 60) {
    ticketPrice *= 0.7; // 30% discount
    console.log(`Your ticket price with your ${age} age is Rs.${ticketPrice}.`);
} else console.log(`Your ticket price with your ${age} age is Rs.${ticketPrice}.`);
