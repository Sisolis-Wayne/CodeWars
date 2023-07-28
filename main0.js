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
