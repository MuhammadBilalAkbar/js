/* 2. Use a for loop to calculate and print the sum of the first 10 natural numbers */
let n = prompt('Please enter the last positive integer to separate even and odd numbers:');
if (isNaN(n) || n < 0) console.log('Please enter a valid positive number.');
else {
    let sum = 0;
    console.log('For loop');
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    console.log(sum);
    sum = 0;
    i = 0;
    console.log('While loop');
    while (i <= n) {
        sum += i;
        i++;
    }
    console.log(sum);
    sum = 0;
    i = 0;
    console.log('Do while loop');
    do {
        sum += i;
        i++;
    }
    while (i <= n);
    console.log(sum);
}
