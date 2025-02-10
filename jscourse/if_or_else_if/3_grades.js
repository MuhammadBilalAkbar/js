/* Grades in a Subject */
let scores = prompt('Enter your scores to calculate grades: ');
if (isNaN(scores) || scores < 0 || scores > 100) alert("Invalid input. Please enter a positive number between 1 and 100.");
else if (scores >= 90 && scores <= 100) console.log('Congrats! You have gotten A grade.');
else if (scores >= 80 && scores <= 89) console.log('Contgrats! You have gotten B grade.');
else if (scores >= 70 && scores <= 79) console.log('You have gotten C grade.');
else if (scores >= 60 && scores <= 69) console.log('You have gotten D grade.');
else if (scores < 60) console.log('You have failed!!!');
else console.log('Something went wrong!!!');