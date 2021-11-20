const { name: myName } = { name: 'Lydia' };

console.log(name);//ReferenceError: name is not defined
/**
When we unpack the property name from the object on the right-hand side, we assign its value "Lydia" to a variable with the name myName.

With { name: myName }, we tell JavaScript that we want to create a new variable called myName with the value of the name property on the right-hand side.

Since we try to log name, a variable that is not defined, undefined is returned on the left side assignment. Later, the value of Lydia is stored through the destructuring assignment.

*/