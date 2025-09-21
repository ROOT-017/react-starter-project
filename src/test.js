const name = "John Doe";
const age = 30;

const message1 = "Hello, my name is " + name + " and I am " + age + " years old."; //Concatenation ES5

//Template Literal ES6
const message = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(message1);
console.log(message);
