const reverseString = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString('abcdefghijklmnopqrstuvwxyz'))

// h e l l o
// o l l e h

function reverseStr(str) {
    const reversed = str.split('').reverse().join('');
    return reversed;
}
console.log(reverseStr('hello'))

5 * 4 * 3 * 2 * 1

const factorial = (n) => {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i
    }
    return fact;
}
console.log(factorial(5))