/*Shipping Cost Calculator
Problem: Create a program to calculate shipping costs based on the weight of a package:

Free shipping for packages weighing less than 1kg
$5 for packages between 1kg and 5kg
$10 for packages heavier than 5kg
Practice: Use conditional statements to calculate shipping cost.*/
let weight = prompt('Enter your package weight to caculate your shipping const:');
if (isNaN(weight) || weight < 0) console.log('Please enter a valid weight.');
else {
    weight = Number(weight);
    if (weight < 1) console.log(`Your package weighs ${weight}kg. Free shipping for packages weighing less than 1kg.`);
    else if (weight >= 1 && weight <= 5)
        console.log(`Your package weighs ${weight}kg. You have to pay $5 for your package's shipping cost.`);
    else
        console.log(`Your package weighs ${weight}kg. You have to pay $10 for your package's shipping cost.`);
}
