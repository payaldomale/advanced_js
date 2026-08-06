// ***********************Closures****************************

// Now we can understand closures.

// Definition:
// A closure is a function that remembers the variables from its lexical scope even after the outer function has finished executing.


// Example 1
const country = "India";

function Company() {

    const companyName = "Test Company";
    // console.log("Country:", country);

    function employee() {
        const empName = "Test Emp";
        console.log("Country:", country);
        console.log("Company:", companyName);
        console.log("EmpName:", empName)
    }
    return employee;
}

const emp = Company();
// console.log("EMP:", emp());
emp();

// Example 2
function ClosureExample() {
    let count = 1;
    function Inner() {
        console.log("count from example 2:", count);
    }
    return Inner();
}
const fn = ClosureExample();
fn;

// Example 3
function Outer() {
    let count = 0;
    return function () {
        count++;
        console.log("count", count);
    }
}

const x = Outer();
const y = Outer();

x();
y();
x();
y();

// Example 4

function Closure() {
    let count = 0;
    return {
        inc() {
            count++;
        },
        get() {
            console.log("count from closure:", count)
        }
    }
}

const a = Closure();
const b = Closure();

a.inc(); // 1
a.inc(); // 1

b.inc(); // 1

a.get();
b.get();


