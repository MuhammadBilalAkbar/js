let n = prompt('Please enter the last positive integer to separate even and odd numbers:');
if (isNaN(n) || n < 0) console.log('Please enter a valid positive number.');
else {
    n = Number(n);
    let evenNumbers = [];
    let oddNumbers = [];

    // For loop
    console.log('For loop');
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) evenNumbers.push(i);
        else oddNumbers.push(i);
    }
    console.log(`Even numbers: ${evenNumbers.join(', ')}`);
    console.log(`Odd numbers: ${oddNumbers.join(', ')}`);

    // While loop
    console.log('While loop');
    i = 0;
    evenNumbers = [];
    oddNumbers = [];
    while (i <= n) {
        if (i % 2 === 0) evenNumbers.push(i);
        else oddNumbers.push(i);
        i++;
    }
    console.log(`Even numbers: ${evenNumbers.join(', ')}`);
    console.log(`Odd numbers: ${oddNumbers.join(', ')}`);

    // Do while loop
    console.log('Do while loop');
    i = 0;
    evenNumbers = [];
    oddNumbers = [];
    do {
        if (i % 2 === 0) evenNumbers.push(i);
        else oddNumbers.push(i);
        i++;
    }
    while (i <= n);
    console.log(`Even numbers: ${evenNumbers.join(', ')}`);
    console.log(`Odd numbers: ${oddNumbers.join(', ')}`);
}
