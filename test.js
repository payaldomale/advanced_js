// ---------------Check--isEven----------------
// function isEven(n) {
//     if (n % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(isEven(2))

// ---------------Reverse--String---------------

// function reverseString(str) {
//     return str.split('').reverse().join('')
// }

// console.log(reverseString('hello'))

// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i]
//     }
//     return reversed;
// }
// console.log(reverseString('abcdefghijklmnopqrstuvwxyz'));

function reverseStr(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseStr("Hello"));

function reverseStr(str) {
    return reversed = str.split('').reverse().join('')
}

console.log(reverseStr('hello'))

// ---------------findMaxNum-------------------

// function findMaxNum(arr) {
//     let maxNum = arr[0];
//     for (let i = 0; i <= arr.length; i++) {
//         if (maxNum <= arr[i]) {
//             maxNum = arr[i];
//         }
//     }
//     return maxNum;
// }

// console.log(findMaxNum([-10, -3, -7]));

function maxNum(arr) {
    let maxNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (maxNum <= arr[i]) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}
console.log(maxNum([-10, -3, -7]));

// ---------------countVowels-------------------

// function countVowels(str) {
//     let vowels = 'aeiouAEIOU';
//     let newStr = [];

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             newStr.push(str[i])
//         }
//     }
//     return {
//         count: newStr.length,
//         vowels_found: newStr
//     }
// }

// console.log(countVowels('helUlOA'))

function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let newStr = [];
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            newStr += str[i];
        }
    }
    return {
        count: newStr.length,
        vowels_found: newStr
    }
}

console.log(countVowels("hellooo"))

// ---------------removeDuplicates-------------------

// function removeDuplicates(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!newArr.includes(arr[i])) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }

function removeDuplicates(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr
}
console.log(removeDuplicates([1, 1, 2, 3, 4, 4, 5, 6, 7, 8, 7]))

// console.log(removeDuplicates(["a", "b", "a", "c", "b"]))

// function removeDuplicates(arr) {
//     return arr
//         .filter((item, index) => arr.indexOf(item) === index)
//         .sort((a, b) => (a - b))
// }
// console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 3, 5, 6, 4, 4, 8, 7]))

// ---------------findFactorial-------------------

// function factorial(n) {
//     let fact = 1;
//     for (let i = 1; i <= n; i++) {
//         fact *= i
//     }
//     return fact;
// }
// console.log(factorial(5))

// ---------------isPrimeNo-------------------

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(4))

// ---------------invertObject-------------------

// function invertObject(obj) {
//     let inverted = {};
//     for (let [key, val] of Object.entries(obj)) {
//         inverted[val] = key;
//     }
//     return inverted;
// }
// console.log(invertObject({ 'a': 1, 'b': 2, 'c': 3 }))

// ---------------ArrofObject-------------------

// function arrofObj(arrObj) {
//     let adults = [];
//     for (user of arrObj) {
//         if (user.age > 18) {
//             adults.push(user.name)
//         }
//     }
//     return adults;
// }

// console.log(arrofObj([
//     { name: "Alice", age: 17 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 19 }
// ]))

// function arrofObj(arrObj) {
//     return arrObj
//         .filter((user) => user.age > 18)
//         .map((user) => user.name)
// }
// console.log(arrofObj([
//     { name: "Alice", age: 17 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 19 }
// ]))

// function printNums() {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i)
//     }
// }
// printNums()

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(5, 5))

// function evenOdd(n) {
//     if (n % 2 === 0) {
//         return 'even';
//     }
//     else {
//         return 'odd';
//     }
// }
// console.log(evenOdd(9))

// function maxNum(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i]
//         }
//     }
//     return max;
// }
// console.log(maxNum([1, 2, 55, 3, 4, 5, 99]))

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString('hello world'))

// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }
// console.log(reverseString('hello'))

// function countVowels(str) {
//     let vowels = 'aeiouAEIOU';
//     let newList = [];
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             newList.push(str[i])
//         }
//     }
//     return {
//         count: newList.length,
//         found: newList,
//     }
// }

// console.log(countVowels('hello'));

// function factorial(n) {
//     let fact = 1;
//     for (let i = 1; i <= n; i++) {
//         fact *= i
//     }
//     return fact;
// }
// console.log(factorial(5))

// function isPalindrome(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i]
//     }

//     // let reversed = str.split('').reverse().join('')

//     if (str.toLowerCase() === reversed.toLowerCase()) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(isPalindrome('racecar'));

// function removeDuplicates(arr) {
//     let duplicates = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!duplicates.includes(arr[i])) {
//             duplicates.push(arr[i])
//         }
//     }
//     return duplicates;
// }
// console.log(removeDuplicates([5, 2, 3, 4, 5, 1, 2, 3, 4, 5]))

function removeDuplicates(arr) {
    return arr
        .filter((item, index) => arr.indexOf(item) === index)
}
console.log(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));

// function sortNums(arr) {
//     return arr.sort((a, b) => a - b)
// }
// console.log(sortNums([5, 3, 2, 4, 1]))

// -----------------Check--Frequency-------------------

// function checkFrequency(str) {
//     let frequency = {};
//     let cleanedStr = str.toLowerCase().replace(/\s/g, '');

//     for (let char of cleanedStr) {
//         if (frequency[char]) {
//             frequency[char]++;
//         } else {
//             frequency[char] = 1;
//         }
//     }
//     return frequency;
// }

// console.log(checkFrequency('hello world'))

// -----------------isAnagram----------------------------

function isAnagram(str1, str2) {
    function makeStr(str) {
        map = {};
        for (let i = 0; i < str.length; i++) {
            let char = str[i].toLowerCase()
            if (char >= a && char <= z) {
                map[char]++;
            }
        }
    }
}
