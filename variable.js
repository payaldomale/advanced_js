// why let and const not accessible with window object?

// In browsers, there is a special global object called window.
// Historically, when JavaScript was created, global variables declared with var were attached to this object.

// var username = "John";
// console.log(window.username);
// John

// let username = "John";
// console.log(window.username);
// undefined

// The variable exists, but it is stored in a separate global lexical environment, not as a property of window.
var value;
console.log(value); //undefined
value = 100;

let valuee;
console.log(valuee);//undefined
valuee = 100
console.log(valuee) //100

// why let is better than var?

// let is considered better than var in modern JavaScript because it
// gives you more predictable behavior. The main advantage is not that
// let can do more things — both var and let can store values and be reassigned.
// The difference is how safely they handle scope and declarations.
