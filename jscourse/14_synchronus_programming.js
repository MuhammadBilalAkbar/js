console.log('Start');
let x = 20, y = 20;
console.log(`Sum of x and y is ${x + y}.`);
console.log('End');

function task1() {
    console.log('Task 1 is starting...');
    for (let i = 0; i < 1e10; i++) { }
    console.log('Task 1 is complete.');
}

function task2() {
    console.log('Task 2 is starting...');
    console.log('Task 2 is complete.');
}

task1();
task2();