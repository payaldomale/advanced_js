//**************** */ An Execution Context is the environment JavaScript creates to execute your code.*****************

// It contains everything needed to run the current piece of code:

// Variables
// Functions
// The value of this
// Scope information

// Think of it as a workspace that JavaScript creates before executing code.

// 1. var hoisting inside a function.
// 2. The Temporal Dead Zone (let/const).
// 3. Closures (functions remember where they were defined).
let x = 2;

function double(n) {
    return n * 2;
}

function print() {
    const result = double(x);
    console.log(result);
}

print();

var a = 11;

console.log(a);

var a = 10;

console.log(a);

greek();

function greek() {
    console.log("Hello");
}

// greek();

// var greek = function () {
//     console.log("Hello");
// }

console.log(t);
let t = 5


// Before JavaScript executes this code, it needs to know:

// Where should name be stored?
// Where should greet function be stored?
// How can greet() access name?
// What is the value of this?

// 1. Global Execution Context (GEC)(one per program)

var a = 10;

function greet() {
    console.log("Hello");
}

console.log(a);

// Memory
// --------------------
// a       -> undefined
// greet   -> function

// --------------------
// Code Execution

// Then execution begins.

// What does the Global Execution Context contain ?

// 1. Memory Component
// 2. Code Component
// 3. Global Object(this//window)

// *********************************************

// 2. Function Execution Context (FEC)

// When is a Function Execution Context created?
// Whenever a function is called, not when it is defined.
// After the function finishes execution, unless referenced data remains alive through mechanisms such as closures.

// *********************************************

// 3. Eval Execution Context
// It has its own execution context.
// eval() executes strings as code, it is slow, difficult to optimize, and can introduce security risks if used with untrusted input. It is generally avoided in modern JavaScript.
