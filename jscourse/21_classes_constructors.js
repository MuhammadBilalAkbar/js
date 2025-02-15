class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        console.log(`My name is ${this.name} and my age is ${this.age}.`);
    }
}
const person = new Person('Muhammad Bilal Akbar', 27);
person.info();
console.log(person.name);
console.log(person.age);

class MathUtils {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add() {
        return this.x + this.y;
    }
    sub() {
        return this.x - this.y;
    }
}

const utils = new MathUtils(2, 5);
console.log(utils.add());
console.log(utils.sub());
