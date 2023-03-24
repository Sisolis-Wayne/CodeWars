// alert('I wrote this code on a phone')

// Arrange an input of non-negative integer in descending order 
const descendingOrder = (n) => Number(n.toString().split('').map((item) => Number(item)).sort((a, b) => b - a).join(''))


console.log(descendingOrder(42145))
console.log(descendingOrder(14526443))



// Convert number to reversed array of digits
const digitize = n => n.toString().split('').map((item) => Number(item)).reverse()


console.log(digitize(35231))
console.log(digitize(0))



// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

const friend = friends => friends.filter((item) => item.length === 4)


let Input = ["Ryan", "Kieran", "Jason", "Yous"]
console.log(friend(Input))



// Sum without highest and lowest number
// If an empty value(null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

let input = [6, 2, 1, 8, 10]
let input_0 = [0, 1, 6, 10, 10]
console.log(input_0.length)
let input_1 = [-6, -20, -1, -10, -12]
let input_2 = [-6, 20, -1, 10, -12]
let input_3 = [3, 2]


// sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0
// one-liner above
const sumArray = array => {
    if (array) {
        let newArr = array.sort((a, b) => b - a)
        newArr.shift()
        newArr.pop()
        return newArr.reduce((acc, curr) => acc + curr, 0)
    } else {
        return 0
    }
}


console.log(sumArray())
console.log(sumArray([1, 1, 11, 2, 3]))
console.log(sumArray(input_1))
console.log(sumArray(input_2))
console.log(sumArray(input_3))


let str = null

console.log(typeof(str))




// invert the number in the array
const invert = array => array.slice().map((item) => -item)


console.log(invert([1, 2, 3, 4, 5]))
console.log(invert([1, -2, 3, -4, 5]))
console.log(invert([]))
console.log(invert([0]))


// counting trues
let sheepPresent = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]

const countSheeps = (arrayOfSheep) => {
    return arrayOfSheep.reduce((acc, curr) => {
        curr === true ? acc.push(curr) : ''
        return acc
    }, []).length
    // let arr = []
    // for (const select of arrayOfSheep) {
    //     if (select === true) arr.push(select)
    // }
    // return arr.length
    // correct solution....just uncomment!
    //  return arrayOfSheeps.filter(Boolean).length;
}

console.log(countSheeps(sheepPresent))

// reverse each word in a string
const reverseWords = str => {
    return str.split(' ').map((item) => item.split('').reverse().join('')).join(' ')
}

console.log(reverseWords('This is an example!'))
console.log(reverseWords('double spaces'))



// Even or Odd
const evenOrOdd = (number) => {
    return number % 2 === 0 ? 'Even' : 'Odd'
}

console.log(evenOrOdd(2))


// Count by X
const countBy = (x, n) => {
    let z = [];

    for (let m = 1; m <= n; m++) {
        z.push(x * m)
    }

    return z;
}



console.log(countBy(1,10))
console.log(countBy(2,5))



// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

const lovefunc = (flower1, flower2) => {
    if ((flower1 % 2 === 0 && flower2 % 2 !== 0) || flower1 % 2 !== 0 && flower2 % 2 === 0) return true
    else return false
}

console.log(lovefunc(1,4))
console.log(lovefunc(2,2))
console.log(lovefunc(0,1))
console.log(lovefunc(0,0))



// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers. Return as a number.

const divCon = (x) => {
    let numCount = 0;
    let stringNumCount = 0;

    for (const select of x) {
        typeof(select) === 'number' ? numCount += select : stringNumCount += +select
    }

    return numCount - stringNumCount

    // return x.reduce((acc, cur) => typeof cur === 'number' ? acc + cur : acc - Number(cur), 0)
}

console.log(divCon([9, 3, '7', '3']) )
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']))


console.log(Math.round(2.467, 1))
console.log(Math.round(-20.5))
console.log(2.456.toFixed(5))




// sum a series of terms and convert to string
const SeriesSum = (n) => {
    let count = 0;
    for (let m = 1; m <= n; m++) {
        count += (1 / (3 * m - 2))
    }
    return count.toFixed(2).toString()
}


console.log(SeriesSum(0))
console.log(SeriesSum(1))
console.log(SeriesSum(2))
console.log(SeriesSum(3))
console.log(SeriesSum(4))



// Return Negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

const makeNegative = num => {
    if (num > 0) return -num
    if (num < 0 ||num === 0) return num
}
console.log(makeNegative(1))   // return -1
console.log(makeNegative(-5))   // return -5
console.log(makeNegative(0))    // return 0
console.log(makeNegative(0.12))// return -0.12



/*

----------------------//\\
---------------------// ¤ \\
---------------------\\ ¤ //
---------------------- \\//
-------------------- (___)
---------------------(___)
---------------------(___)
---------------------(___)_________
--------\_____/\__/----\__/\_____/
------------\ _°_[------------]_ _° /
----------------\_°_¤ ---- ¤_°_/
--------------------\ ° /
---------------------|\_°_/|
---------------------[|\_/|]
---------------------[|[¤]|]
---------------------[|;¤;|]
---------------------[;;¤;;]
--------------------;;;;¤]|]\
-------------------;;;;;¤]|]-\
------------------;;;;;[¤]|]--\
-----------------;;;;;|[¤]|]---\
----------------;;;;;[|[¤]|]|---|
---------------;;;;;[|[¤]|]|---|
----------------;;;;[|[¤]|/---/
-----------------;;;[|[¤]/---/
------------------;;[|[¤/---/
-------------------;[|[/---/
--------------------[|/---/
---------------------/---/
--------------------/---/|]
-------------------/---/]|];
------------------/---/¤]|];;
-----------------|---|[¤]|];;;
-----------------|---|[¤]|];;;
------------------\--|[¤]|];;
-------------------\-|[¤]|];
---------------------\|[¤]|]
----------------------\\¤//
-----------------------\|/
------------------------V

*/




// Decimal Time Conversion
const toIndustrial = (time) => {
    
}

const toNormal = (time) => {

}
































































