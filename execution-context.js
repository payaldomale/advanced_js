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
