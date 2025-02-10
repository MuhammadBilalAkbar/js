/*Write a for loop that calculates the factorial of a given number*/
let n = prompt('Enter the number to calcuate the factorial of a number:');
n = Number(n);
if (isNaN(n) || n < 0) console.log('Please a valid positive number find the factorial.');
else {
    const originalN = n;
    // For loop
    let factorial;
    for (factorial = 1; n > 0; n--) {
        factorial *= n;
    }
    console.log(factorial);

    // While loop
    factorial = 1;
    n = originalN;
    while (n > 0) {
        factorial *= n;
        n--;
    }
    console.log(factorial);

    // Do while loop
    factorial = 1;
    n = originalN;
    do {
        factorial *= n;
        n--;
    } while (n > 0);
    console.log(factorial);
}