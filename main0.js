const solution = number => {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            // console.log(i)
            sum += i
        }

    }

    return sum;
}

console.log(solution(-5))
console.log(solution(-13))
console.log(solution(19))
console.log(solution(10))

////////////////////// 


const arr = [2, 3, 4, 5];
console.log(arr);
console.log(arr.splice(1, 1))
console.log(arr)
const brr = [1, 2, 3]
console.log(arr.includes(brr[1]))

const arrayDiff = (a, b) => {
    const newArr = [];
    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            newArr.push(a[i])
        }
    }
    return newArr;
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]))


console.log(arrayDiff([1, 2], [1]))

let str = 'milk'
console.log(str.split('').reverse().join(''))
console.log(str.length)

////////////////////////////////////////

const spinWords = string => {
    return string.split(' ').reduce((acc, curr) => {
        curr.length >= 5 ? acc.push(curr.split('').reverse().join('')) : acc.push(curr)
        return acc
    }, []).join(' ')
}

console.log(spinWords("This is another test"))
console.log(spinWords("Hey fellow warriors"))


let strr = 'freecodecamp';
console.log(strr.match(/e/))
console.log(strr.match(/e/).groups)
console.log(strr.match(/[cmr]/ig))



const myObj = {
    a: 1,
    b: 2,
    c: 3
}

console.log(myObj)

for (const meet in myObj) {
    console.log(meet)
    if (myObj[meet] === 2) console.log(meet)
}


// const findOdd = (A) => {
//     // return A
//     return Number(Object.entries(A.reduce((acc, curr) => {
//         !acc[curr] ? acc[curr] = 1 : acc[curr]++
//         return acc
//     }, {})).reduce((acc, curr) => {
//         if ((curr[1] % 2) !== 0) acc.push(curr)
//         return acc
//     }, [])[0][0])
// } correct

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);


console.log(findOdd([0, 1, 0, 1, 0]))
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))
console.log(findOdd([7]))
console.log(findOdd([0]))
console.log(findOdd([1, 1, 2]))

///////////////////////////////////////// read on bitwise XOR
console.log(2 ^ 0)

/////////////////////
let a = [121, 144, 19, 161, 19, 144, 19, 11] 
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

const comp = (array1, array2) => {
    if (((array1 && array2) !== null)) {
        array1.sort((a, b) => a - b)
        array2.sort((a, b) => a - b)
        for (let m = 0; m < array1.length; m++) {
            if ((array1[m] ** 2) !== array2[m]) return false
        }
        return true
    } else {
        return false
    }
    
}

console.log(comp(a, b))
console.log(comp([2, 2, 3], [4, 9, 9]))
console.log(comp([2, 1, 3], [8, 1, 2]))
console.log(comp([], []))
console.log(comp([], null))


// console.log(2 ** 2 === 9)

///////////////////////////////////////// persistent bugger
const persistence = (num) => {
    let counter = 0
    let arrayedNum = num.toString().split('').reduce((acc, curr) => {
        acc.push(+curr)
        return acc
    }, [])

    // console.log(arrayedNum)
    // console.log(arrayedNum.length)

    while (arrayedNum.length > 1) {
        counter++
        let mul = arrayedNum.reduce((acc, curr) => {
            return acc * curr
        }, 1).toString().split('').reduce((acc, curr) => {
            acc.push(+curr)
            return acc
        }, [])

        arrayedNum = mul
    }

    // return arrayedNum[0]
    return counter
    // console.log(num)
}
console.log(persistence(39))
console.log(persistence(4))
console.log(persistence(999))
console.log(persistence(13))
// console.log(persistence(12))

// let mul = [1, 2, 3, 4, 5]
// let mu = mul.reduce((acc, curr) => {
//     return acc * curr
// }, 1)

// console.log(mu)

//////////////////////////////////////////

const createPhoneNumber = (numbers) => {
    let arr = [];
    for (i = 0; i < numbers.length; i++) {
        // console.log(numbers[i])
        if (i === 0) {
            arr.push(`(${numbers[i]}`)
            continue
        }
        if (i === 2) {
            arr.push(`${numbers[i]}) `)
            continue
        }
        if (i === 5) {
            arr.push(`${numbers[i]}-`)
            continue
        }
        arr.push(numbers[i])
    }
    return arr.join('')
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
// "(123) 456-7890"



// let m = '32'
// console.log(Number(m))

/////////////////////////////////////

const twoSum = (numbers, target) => {
    // ...
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if ((numbers[i] + numbers[j] === target) && (i !== j)) {
                return [i, j]
            }
        }
    }
}


console.log(twoSum([1, 2, 3], 4))
console.log(twoSum([1234, 5678, 9012], 14690))
console.log(twoSum([2, 2, 3], 4))
console.log(twoSum([2, 2, 3], 5))


/////////////////////////////
const addArrays = (array1, array2) => {
    let newArr = [];
    if (array1.length >= 1 || array2.length >= 1) {
        if (array1.length === 0) {
            array1.push(0)
        }
        if (array2.length === 0) {
            array2.push(0)
        }
        
        let arrayToNumber1 = parseInt(array1.join(''));
        let arrayToNumber2 = parseInt(array2.join(''));
        let n = (arrayToNumber1 + arrayToNumber2).toString().split('');

        for (let i = 0; i < n.length; i++) {
            if (n[i] === '-') {
                let str = n[i] + n[i + 1]
                newArr.push(+str)
                continue
            }
            if (n[i - 1] === '-') {
                continue
            }
            newArr.push(+(n[i]))
        }
        return newArr
    } else {
        return newArr
    }
}

console.log(addArrays([-1], [1]))
console.log(addArrays([], [-12]))
// console.log(addArrays([3, 2, 9], [1, 2]))
// console.log(addArrays([4,7,3],[1,2,3]))
// console.log(addArrays([1],[5,7,6]))
// console.log(addArrays([3, 2, 6, 6], [-7, 2, 2, 8]))
// console.log(addArrays([6, 7], [6, 7]))
// console.log(addArrays([6, 7], []))
// console.log(addArrays([], []))

let nnn = []
console.log(nnn.length)
nnn.push(0)
console.log(nnn)



const isSquare = n => (n < 0) ? false : Math.sqrt(n) === Math.ceil(Math.sqrt(n)) ? true : false


console.log(Math.sqrt(4))
console.log(Math.ceil(0))

console.log(isSquare(0))
console.log(isSquare(3))
console.log(isSquare(25))
console.log(isSquare(4))
console.log(isSquare(-1))
console.log(isSquare(37))
console.log(isSquare(121))
console.log(isSquare(49))

////////////////////////////////////////////////

const countSmileys = arr => {
    let count = 0
    let smileyArr = [':-)', ';-)', ':-D', ';-D', ':)', ';)', ':D', ';D', ':~)', ';~D', ':~D', '~D']
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === smileyArr[j]) count++
        }
    }
    return count
}

console.log(countSmileys([':)', ';(', ';}', ':-D']))
console.log(countSmileys([';D', ':-(', ':-)', ';~)']))