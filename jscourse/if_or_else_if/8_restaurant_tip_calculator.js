/*Restaurant Tip Calculator
Problem: Create a tip calcualtor based on the service of restaurant:

"Excellent" service: 20% tip
"Good" service: 15% tip
"Average" service: 10% tip
"Poor" service: 5% tip
Practice: Use if, else if, and else to calculate the tip percentage.*/
let service = prompt(`Please tell me how was the service of our restaurant?
\n1. Excellent
\n2. Good
\n3. Average
\n4. Poor`);
service = service.toLowerCase().trim();
if (service === '1' || service === 'excellent') console.log('Tip percentage is 20%.');
else if (service === '2' || service === 'good') console.log('Tip percentage is 15%.');
else if (service === '3' || service === 'average') console.log('Tip percentage is 10%.');
else if (service === '4' || service === 'poor') console.log('Tip percentage is 5%.');
else console.log('Invalid input. Please provide a valid response (1, 2, 3, or 4).');
