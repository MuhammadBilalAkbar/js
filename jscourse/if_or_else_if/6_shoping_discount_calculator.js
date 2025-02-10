/*Shopping Discount Calculator
Problem: Create a program that calculates a discount based on the total purchase amount:

Children (under 12) get a 50% discount
10% discount if the purchase is between $50 and $100
20% discount if the purchase is more than $100
Practice: Use conditional statements to calculate the discount.*/


/*Myself*/
// let age = prompt('Enter your age:');
// // Validate age input
// if (isNaN(age) || age < 0) console.log('Please enter a valid age.');
// else {
//     age = Number(age);
//     // Get purchase amount
//     let purchase = prompt('Enter the purchase amount to calculate your discount:');
//     if (isNaN(purchase) || purchase < 0) {
//         console.log("Please enter a valid purchase amount.");
//     } else {
//         purchase = Number(purchase);
//         let discount = 0;
//         if (age <= 12) {
//             discount = 50;
//             if (purchase < 50) console.log(`Your age is ${age}. Your purchase $${purchase} is less than $50.
//             \nYour discount is 50%.
//             \nYour have to pay $${purchase * 0.5}.`); //50% discount
//             else if (purchase >= 50 && purchase <= 100) {
//                 console.log(`Your age is ${age}. Your purchase $${purchase} is between $50 and $100.
//                 \nYour discount is 50 + 10 = 60%.
//                 \nYour have to pay $${purchase * 0.4}.`); //50+10=60% discount
//             } else if (purchase > 100) {
//                 console.log(`Your age is ${age}. Your purchase $${purchase} is more than $100.
//                 \nYour discount is 50 + 20 = 70%.
//                 \nYour have to pay $${purchase * 0.3}.`); //50+20=70% discount
//             }
//         } else {
//             if (purchase < 50) {
//                 console.log(`Your age is ${age}. Your purchase $${purchase} is less than $50.
//                 \nYour discount is 50%.
//                 \nYour have to pay $${purchase * 0.5}.`); //50% discount
//             } else if (purchase >= 50 && purchase <= 100) {
//                 console.log(`Your age is ${age}. Your purchase $${purchase} is between $50 and $100.
//                 \nYour discount is 10%.
//                 \nYour have to pay $${purchase * 0.9}.`); //10% discount
//             } else {
//                 console.log(`Your age is ${age}. Your purchase $${purchase} is more than $100.
//                 \nYour discount is 20%.
//                 \nYour have to pay $${purchase * 0.8}.`); //20% discount
//             }
//         }
//     }
// }

/*Chat GPT*/
let age = prompt('Enter your age:');
if (isNaN(age) || age < 0) console.log('Please enter a valid age.');
else {
    age = Number(age);
    let purchase = prompt('Enter the purchase amount to calculate your discount:');
    if (isNaN(purchase) || purchase < 0) console.log('Please enter a valid purchase amount.');
    else {
        purchase = Number(purchase);
        let discount = 0;
        if (age <= 12) {
            discount = 50; // 50% discount for less than $50.
            if (purchase >= 50 && purchase <= 100) discount += 10; // 50+10=60% discount for purchase between $50 and $100.
            else if (purchase > 100) discount += 20;  // 50+20=70% discount for purchase more than $100.
        } else {
            if (purchase >= 50 && purchase <= 100) discount = 10;
            else if (purchase > 100) discount = 20;
        }
        let finalPrice = purchase * (1 - discount / 100);
        console.log(`Your age is ${age}.
Your purchase amount is $${purchase}.
Your discount is ${discount}%.
You have to pay $${finalPrice.toFixed(2)}.`);
    }
}
