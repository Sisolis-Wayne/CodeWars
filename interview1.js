
///////////////////////////////////////////

// const XO = (str) => {
//     if (str.includes('x') && str.includes('o')) {
//         let newArr = str.toLowerCase().split('');
//         // console.log(newArr)
//         const newAns = Object.entries(newArr.reduce((acc, curr) => {
//             if (!acc[curr]) {
//                 acc[curr] = 1
//             } else {
//                 acc[curr]++
//             }
//             return acc
//         }, {}))

//         console.log(newAns)
//         for (let j = 0; j < newAns.length; j++) {
//             for (let m = 1; m < newAns.length; m++) {
//                 if (newAns[m][1] === newAns[j][1]) return true
//                 else return false
//             }
//         }
//     } else {
//         return false
//     }
// }

const XO = str => {
    let countX = (str.match(/x/gi) || []).length === (str.match(/o/gi) || []).length
    return countX
    // console.log(countX) also correct


    // let countOfX = 0;
    // let countOfO = 0;
    // let newStr = str.toLowerCase();

    // if (str.includes('x') && str.includes('o')) {
    //     for (let m = 0; m < newStr.length; m++) {
    //         if (newStr[m] === 'x') countOfX += 1;
    //         if (newStr[m] === 'o') countOfO += 1;
    //     }

    //     console.log(countOfO)
    //     console.log(countOfX)

    //     return countOfO === countOfX
    //     // if (countOfO === countOfX) return true;
    //     // else return false;
    // } else if (!str.includes('x') && !str.includes('o')) {
    //     return true;
    // } else {
    //     return false
    // }
    // correct!
    // if (!str.includes('x') && !str.includes('o')) return true
}


console.log(XO("ooxxx"))
console.log(XO("ooxx"))
console.log(XO("xooxx"))
console.log(XO("zpzpzppz"))
console.log(XO("zzoo"))
console.log(XO("ooxXm"))
console.log(XO("ooxx"))
console.log(XO("xo"))

console.log(Object.entries({ o: 2, x: 2 }))
console.log(Object.values({ o: 2, x: 2 }))
console.log(Object.keys({ o: 2, x: 2 }))
console.log('xcccmz'.includes('z'))

/** 
 * Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

///////////////////////////////////

const isHappy = (n, pow) => {
    // let newStringNum = n.toString().split('')
    // console.log(newStringNum)
    console.log(n, pow)

    let saveArr = [n];
    function run(z) {
        let m = z.toString().split('').reduce((acc, curr) => acc += Math.pow(curr, pow), 0)

        saveArr.push(m)
        if (m === 1) {
            saveArr = [1]
            return
        }

        if (m === n) {
            // can also use unshift
            return
        }
        run(m)
    }

    run(n)

    return saveArr

}

// console.log(isHappy(7, 2))
console.log(isHappy(42, 2))
// console.log(isHappy(89547, 4))
