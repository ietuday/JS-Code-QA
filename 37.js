const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers); // [ 1, 2, 3, <7 empty items>, 11 ]

/**
When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of undefined, but you will see something like:

[1, 2, 3, 7 x empty, 11]

depending on where you run it (it's different for every browser, node, etc.)
 */
