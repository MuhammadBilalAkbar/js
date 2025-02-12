// A callback function is passed as an argument to another function.
let summ = (a, b, callback1, callback2) => {
    console.log(`a + b: ${a + b}`);
    callback1(a, b); // Calling the callback function
    callback2(a, b); // Calling the callback function
}
let subb = (a, b) => {
    console.log(`a - b: ${a - b}`);
}
let mull = (a, b) => {
    console.log(`a * b: ${a * b}`);
}

// The sum function is invoked with a = 5, b = 3, and callback = sub or multiply (function reference).
// summ(5, 3, subb, mull); // It prints the sum of a and b. Then, it calls the callback functions, passing a and b as arguments.
// sub is callback1 and multiply is callback2

/*
Why Use Callbacks?
Callbacks are useful for:
Asynchronous Operations: For example, waiting for a file to be read or an API call to complete.
Reusability: You can pass different functions as callbacks to perform different tasks.
Separation of Concerns: The sum function doesn't need to know what the callback does; it just calls it.
The function that accepts the callback (sum in this case) can call it at any time.

Callbacks are commonly used in asynchronous programming, event handling, and reusable code.
✔ Callback functions allow us to execute a function inside another function.
✔ Useful in asynchronous programming (e.g., API calls, event listeners).
✔ Helps in modularizing code by passing different behaviors dynamically.
*/

// Callback hell, functions inside functions
let sum = (a, b, callback) => {
    console.log(`a + b: ${a + b}`);
    callback(a, b);
}

let sub = (a, b, callback) => {
    console.log(`a - b: ${a - b}`);
    callback(a, b);
}

let mul = (a, b, callback) => {
    console.log(`a * b: ${a * b}`);
    callback(a, b);
}

let divide = (a, b, callback) => {
    console.log(`a / b: ${a / b}`);
    callback(a, b);
}

sum(5, 3, (a, b) => {
    sub(a, b, () => {

    })

    mul(a, b, () => {

    })

    divide(a, b, () => {
        console.log(`All operations are completed.`)
    })
});

sum(5, 3, sub);
