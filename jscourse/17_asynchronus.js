console.log('Hi bhai');
function hello() {
    for (let i = 0; i < 1e10; i++) { }
    console.log('testing');
}
// hello();
setTimeout(hello, 5000);
console.log('Bye bhai');
