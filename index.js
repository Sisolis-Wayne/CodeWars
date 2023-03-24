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























