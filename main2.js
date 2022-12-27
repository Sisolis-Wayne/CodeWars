let newArr = [1, 2, 5.2, 4, 0, -2]
let newSrr = []

console.log(newArr[4])

// Sum Numbers
function sum(numbers) {
    "use strict";
    let sums = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers.length > 0) {
            sums += numbers[i];
        } else {
            return 0;
        }
    }
    return sums;
}

// const sum = numbers => numbers.reduce((a, b) => a + b, 0);
// read on reduce, split, join and reverse❗❗❗

console.log(sum(newArr))

///////////////////////////////////////////////////
function setAlarm(employed, vacation) {
    if (employed === true && vacation === false) {
        return true;
    } else {
        return false;
    }
    // if (employed === true && vacation === true) {
    //     return false;
    // }
    // if (employed === false && vacation === true) {
    //     return false;
    // }
    // if (employed === false && vacation === false) {
    //     return false;
    // }

}

console.log(setAlarm())

///////////////////////////////////////////////

// function positiveSum(arr) {
//     if (arr) {
//         let sum = 0;
//         let i = 0;
//         for (i = 0; i < arr.length; i++) {
//             if (arr[i] > 0) {
//                 sum += arr[i];
//             }
//         }
//         if (arr.length <= 0) {
//             return 0;
//         }
//         // return sum;
//         // if (sum) {
//         return sum;
//     // }
//     } else {
//         return 0;
//     }
// }

// function positiveSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }

function positiveSum(arr) {
    return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

console.log(positiveSum([1, -4, 7, 12]))
// [1, -4, 7, 12]

//////////////////////////////////////////////////////

// function abbrevName(name) {
//     // code away

//     return name
//         .replace(/\b(\w)\w+/g, '$1')
//         .replace(/\s/g, '.')
//         .replace(/\.$/, '')
//         .toUpperCase();
// }

function abbrevName(name) {
    let nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}



console.log(abbrevName('p favuzzi'))
console.log(abbrevName('Sam Harris'))
console.log(abbrevName('David Mendieta'))
console.log(abbrevName('David Mendieta milik'))

/////////////////////////////////////////////////////////////////

function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
}

console.log(removeExclamationMarks("Hello World!!"))

/////////////////////////////////////////////////////

function check(a, x) {
    // your code here
    return a.includes(x);
}

console.log([66, 101].includes(66))
console.log(check([101, 45, 75, 105, 99, 107], 6))
console.log(check(['t', 'e', 's', 't'], 's'))

// let milk = 'mebad'
// let pattern = /b/gi;
// let mat = milk.match(pattern)
// console.log(mat)

/////////////////////////////////////////////////////////////
// redo this function--------------------------------------------------------------
// function countSheep(num) {
//     //your code here
//     let st = 'sheep...'
//     for (let i = 0; i < st.length; i++) {
//         st = st[i] + st
//         return st;
//     }
// }

// console.log(countSheep())

///////////////////////////////////////////////////////////////

// function updateLight(current) {
//     //your code here!
//     let green = 'green'
//     let yellow = 'yellow'
//     let red = 'red'
//     if (current === green) {
//         return yellow;
//     }
//     if (current === yellow) {
//         return red;
//     }
//     if (current === red) {
//         return green;
//     }
// }

const updateLight = (current) => current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

console.log(updateLight('green'))
console.log(updateLight('yellow'))
console.log(updateLight('red'))

////////////////////////////////////////////////

String.prototype.toJadenCase = function () {
    //...
    // return String.plit("").String[0].toUpperCase().join()
    let String = string;
    const words = String.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
};

// function toJadenCase(string) {
//     const words = string.split(" ");

//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//     }

//     return words.join(" ");
// }

// console.log(toJadenCase(str))

// string = "How can mirrors be real if our eyes aren't real";
// const words = string.split(" ");

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
// }

// console.log(words.join(" "))

// console.log(string)


let str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase())
