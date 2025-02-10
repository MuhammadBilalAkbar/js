/*Simple ATM Withdrawal
Problem: Write a program that simulates a simple ATM withdrawal system. The program should:

Deny the transaction if the requested withdrawal is more than the account balance
Allow the transaction if the balance is sufficient.
Display the remaining balance after withdrawal.
"Poor" service: 5% tip
Practice: Use if, else if, and else to handle different cases of balance and withdrawal amounts.*/

let balance = 10000;
let withdrawalAmount = prompt("Enter the amount you want to withdraw:");
if (isNaN(withdrawalAmount) || Number(withdrawalAmount) <= 0) {
    console.log('Please enter amount greater than zero.')
} else {
    withdrawalAmount = Number(withdrawalAmount);
    if (withdrawalAmount > balance) console.log('You do not have sufficient balance.');
    else {
        let fee = withdrawalAmount * 0.05;
        let totalDeduction = withdrawalAmount + fee;
        if (totalDeduction > balance) {
            console.log("You do not have sufficient balance to cover the withdrawal and the service fee.");
        } else {
            balance -= totalDeduction;
            console.log(`You have withdrawn ${withdrawalAmount}. A 5% service fee of ${fee.toFixed(2)} was applied. Your remaining balance is ${balance.toFixed(2)}.`);
        }
    }
}
