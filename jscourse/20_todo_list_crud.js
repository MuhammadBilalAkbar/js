const todoList = [];
const taskOne = {
    'id': 1,
    'title': 'Interview',
    'description': 'Flutter dev application for tomorrow schedule 2am.',
    'date': new Date().toISOString(),
};
const taskTwo = {
    'id': 2,
    'title': 'Shopping',
    'description': 'Do winter shopping...',
    'date': new Date().toISOString(),
};
const taskThree = {
    'id': 3,
    'title': 'Basketball',
    'description': 'Play basketball at 8pm.',
    'date': new Date().toISOString(),
};

todoList.push(taskOne);
todoList.push(taskTwo);
todoList.push(taskThree);

console.log('Today tasks');
todoList.forEach((element) => {
    console.log(element.id, element.title, element.description, element.date);
});
console.log('----- END -----');

const id = prompt('enter id: ');
const foundIndex = todoList.findIndex((element) => element.id == id);
if (foundIndex === -1) {
    console.log('id not found.');
}
else {
    console.log(foundIndex);
    todoList[foundIndex].title = 'Updated Title';
    console.log('Updated tasks');
    todoList.forEach((element) => {
        console.log(element.id, element.title, element.description, element.date);
    });
    console.log('----- END -----');

    todoList.splice(foundIndex, 1);

    console.log('Updated tasks');
    todoList.forEach((element) => {
        console.log(element.id, element.title, element.description, element.date);
    });
    console.log('----- END -----');
}