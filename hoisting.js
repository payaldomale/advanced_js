// ******************Hoisting************************

// Hoisting is JavaScript's behavior of processing declarations before executing the code.

// "Variable is hoisted means it is declared without initialized"(only for var not for let and const)

var a;          // hoisted
console.log(a); // undefined
a = 10;
console.log(a); // 10

// *****************Temporal Dead Zone**********************

// The TDZ is the time between:

// variable creation
// ↓
// ↓
// variable initialization

// During this period, the variable exists but cannot be accessed.

// **************************JavaScript Executes Code in Two Phases**************************

// Declaration → You tell JavaScript, "I have a variable named x."
// Creation → JavaScript reserves memory for x.

// 1. Creation Phase
//         ↓
// 2. Execution Phase

// hositing for var
console.log(a);
var a = 10;
console.log(a);

// hoisting for let
console.log(b);
let b = 10;
console.log(b);

// hoisting for const 
console.log(c);
const c = 10;
console.log(c);
