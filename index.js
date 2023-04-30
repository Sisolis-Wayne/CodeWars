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
console.log(countBy(2,20))



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



// not done yet
// Decimal Time Conversion
// const toIndustrial = (time) => {

// }

// const toNormal = (time) => {

// }
// not done yet

/////////////////////

/*
Create a function that will trim a string (the first argument given) if it is longer than the requested maximum string length (the second argument given). The result should also end with "..."

These dots at the end also add to the string length.

For example, trim("Creating kata is fun", 14) should return "Creating ka..."

If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

If the requested string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.

e.g. trim("He", 1) should return "H...", because 1 <= 3

Requested max
*/


const trim = (str, size) => {
    return str.length <= size ? str : size <= 3 ? str.substring(0, size) + '...' : str.substring(0, size - 3) + '...' 

}

console.log(trim("Creating kata is fun", 14))
console.log(trim("Code Wars is pretty rad", 50))
console.log(trim("He", 1))
console.log(trim("yVJwS WlMHF", 3))


// return 'Creating ka...'


// const newStr = 'i am me and you are you'
// console.log(newStr.substring(0, 4) + ' we are')


/////////////////////////

const smash = words => words.join(' ')
// ['hello', 'world', 'this', 'is', 'great']  => 'hello world this is great'
console.log(smash(['hello', 'world', 'this', 'is', 'great']))

////////////////
const minMax = (arr) => {
    let ans = arr[0]
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] > ans) {
            ans = arr[j]
        }
    }
    return ans
}

// console.log(Math.min(1, -1))
let meArr = [1, 2, 4, 5]

console.log(minMax(meArr))

// let meArr2 = []



// console.log(meArr2)

////////////////////////////////

/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/

const like = names => {
    let str = ''
    // return names[0]
    if (names.length === 1) str += `${names[0]} likes this`
    if (names.length === 0) str += `no one likes this`
    if (names.length === 2) str += `${names[0]} and ${names[1]} like this`
    if (names.length === 3) str += `${names[0]}, ${names[1]} and ${names[2]} like this`
    if (names.length > 3) str += `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    return str
}

console.log(like([]))
console.log(like(["Peter"]))
console.log(["Peter"][0])
console.log(like(["Jacob", "Alex"]))
console.log(like(["Max", "John", "Mark"]))
console.log(like(["Alex", "Jacob", "Mark", "Max"]))
// console.log(like(["Alex", "Jacob", "Mark", "Max"]))
console.log(like(["Alex", "Jacob", "Mark", "Max", "me"]))


const newNames = ["Alex", "Jacob", "Mark", "Max"]
console.log(newNames.slice(0, 2))
console.log(newNames.slice(-2))
console.log(newNames.slice(-2)[0])
console.log(newNames.slice(1, -1))



///////////////////////
/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"

*/

const duplicateEncode = word => {
    let arr = []
    for (let m = 0; m < word.length; m++) {
        // console.log(word[m])

        let re = new RegExp(`${word[m]}`, 'gi')
        if (word.match(re).length === 1) arr.push(word.replace(re, '(')[m])
        if (word.match(re).length > 1) arr.push(word.replace(re, ')')[m])

    }

    return arr.join('')

}

console.log(duplicateEncode('din'))
console.log(duplicateEncode('recede'))
console.log(duplicateEncode('Success'))
console.log(duplicateEncode('@'))

// let string = 'aaj';
// let st = string[0]
// console.log(st)
// console.log(string[0])
// console.log(string.match(/a/gi).length > 1);
// console.log(string.replace(/a/gi, 't'));
// console.log(string)

// How to use template literals in regex for dynamic search pattern
var variable = 'foooooooo';
var expression = `${variable[1]}`;
var re = new RegExp(expression, 'gi');
console.log(re.test('fdjklsffoodjkslfd'))
console.log(('fdjklsffoFFFodjkslfd').match(re))
console.log(('fdjklsffoFFFodjkslfd').match(re).length)
// console.log((('fdjklsffoFFFodjkslfd').match(re)).length)
console.log(re.test('fdjklsfdjkslfd'))




















