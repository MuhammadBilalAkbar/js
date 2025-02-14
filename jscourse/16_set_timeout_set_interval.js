console.log('hi bro');
function hello() {
    console.log('Hello');
}
const interval = setInterval(() => {
    console.log('Hello setInterval');
}, 1000);
setTimeout(hello, 3000) //1000ms = 1sec
setTimeout(() => {
    console.log('Hell');
    clearInterval(interval);
}, 5000)

console.log('by bro');
