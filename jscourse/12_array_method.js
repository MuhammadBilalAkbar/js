let array = [1, 2, 3];
console.log(array);
array.push(4); // add the element after the last index
console.log(array);
array.pop(); // remove the element of the last index
console.log(array);
array.shift(); // remove the element from the first index
console.log(array);
array.unshift(5); // add the element at the first index
console.log(array);
let tempArray1 = array.map((element) => { return element });
let tempArray2 = array.map((element) => { return element * 2 });
let tempArray3 = array.map((element) => { return element % 2 == 0 });
console.log(tempArray1);
console.log(tempArray2);
console.log(tempArray3);
let tempArray4 = array.filter((element) => { return element == 2 }); // filters the elements with provided condition and add them in a new array
console.log(tempArray4);
if (tempArray4.length == 0) console.log('tempArray4 is empty.');
let tempArray5 = array.find((element) => { return element == 10; }); // first element for which condition is matched, is returned
console.log(tempArray5);
if (isNaN(tempArray5)) console.log('kjjjjj');
let array2 = [4, 5, 6];
let concatenation = array.concat(array2);
console.log(concatenation);
let array3 = [4, 5, 1, 3, 6, 2];
console.log(array3);
let tempArray6 = array3.sort();
// when you need to arrange elements in a specific order (ascending, descending, or custom logic).
console.log(tempArray6, 'sort');
let tempArray7 = array3.sort((a, b) => { return a - b }); // sorts in ascending order
console.log(tempArray7);
let tempArray8 = array3.sort((a, b) => { return b - a }); // sorts in descending order
console.log(tempArray8);
let tempArray9 = array3.reverse();
// when you only need to flip the order of elements, regardless of their values.
console.log(tempArray6 + 'sort');
console.log(tempArray9 + 'reverse');
console.log(array.includes(4)); // if the value is in array or not. Answer is boolean
console.log(array.findIndex((element) => { return element == 3 })); // find the index of given element in array, answer is -1 if element is not in the array
