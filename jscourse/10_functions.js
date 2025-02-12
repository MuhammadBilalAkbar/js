// Function with no return type (return type is void)
function sum(x, y) {
    console.log(`Sum of ${x} and ${y} is ${x + y}.`);
}

let x = 20;
let y = 30;
sum(x, y);
sum(30, 20);

// function areaOfRectangle() {
//     let length = prompt('Enter the lenght and height to get area of rectangle.');
//     let width = prompt('Enter the lenght and height to get area of rectangle.');
//     let area = width * length;
//     console.log(`Area of rectange having width ${width} and length ${length} is ${area}.`);
// }
// areaOfRectangle();

// Function with return type
function sum(x, y, name, isLogin) {
    let sum = x + y;
    // return sum;
    // return name;
    // return isLogin;
    return {
        'nameOne': 'Muhammad Bilal Akbar',
        'ageOne': 23,
        'nameTwo': 'Muhammad Hasnain Akbar',
        'ageTwo': 35,
    };
}
let result = sum(2, 3, ['Bilal', 'Hasnain'], false);
console.log('Result', result);

// Get array by calling function and then on specific index, call the specif key of object.
function minus() {
    return [
        {
            'name': 'Muhammad Bilal Akbar',
            'age': 23,
        },
        {
            'name': 'Muhammad Hasnain Akbar',
            'age': 35,
        }
    ];
}
console.log(minus()[0].name);
console.log(minus()[1].age);
