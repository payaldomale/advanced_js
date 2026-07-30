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


// What is const?
// const is a block-scoped variable declaration introduced in ES6.
// Unlike let, it must be initialized at the time of declaration, and its binding cannot be reassigned.

// Objects with const ******************The object is still mutable.*******************
// Many beginners think const makes an object immutable.
// It doesn't.

const user = {
    name: "test user",
    age: 25,
}
console.log(user)
user.name = "Bob";
user.age = 26;
// console.log("name:", user.name)
console.log(user)
// console.log("age:", user.age)

user.city = "ngp"
console.log(user);

// user = {} //TypeError: Assignment to constant variable.

// Array with const

const arr = [1, 2, 3, 4]
arr.push(5, 6)
console.log(arr)
arr.pop()
console.log(arr)
// arr = []  //TypeError: Assignment to constant variable.
// console.log(arr)

// ***************Hoisting is the process by which JavaScript registers variable and function declarations before executing the code.**************
console.log(a);
var a = 1;

// ******************************TDZ(let & const)*********************************

// TDZ is the time between entering a scope and reaching the line where a let or const variable is declared.

// TDZ(Temporal Dead Zone) is the period of time when a variable declared with let
// or const exists but cannot be accessed until the code execution reaches its declaration.

