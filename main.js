let num = 2**6

console.log(num)

//////////////////////////////////////////////////////////////

let str = 'This is a string that has been reversed🙃'
let stra = ['mine', 'you', 'me']
let stray = ["Ebuka", "Rajah"]
console.log(typeof stray)

function solution(str) {
    // a function to reverse a string
    // JSON.stringify(str);
    // let ress = JSON.stringify(str);
    // console.log(typeof ress)
    let res = [...str].reverse().join("").toLowerCase();
    // let seer = JSON.parse
    return res


    // return str.split('').reverse().join('');
}

console.log(solution((str)))
console.log(solution(stray))
console.log(solution(stra))

////////////////////////////////////////////////////////////////

function past(h, m, s) {
    //#Happy Coding! ^_^
    if (0 <= h <= 23) {
        h = h * 3600;
    }

    if (0 <= m <= 59) {
        m = m * 60;
    }

    if (0 <= s <= 59) {
        s = s;
    }

    let result = ((h + m + s) * 1000);
    return result
}

console.log(past(1, 1, 1))

/////////////////////////////////////////////////////////

function basicOp(operation, value1, value2) {
    // Code
    if (operation === '+') {
        return value1 + value2;
    }
    if (operation === '-') {
        return value1 - value2;
    }
    if (operation === '*') {
        return value1 * value2;
    }
    if (operation === '/') {
        return value1 / value2;
    }
}

console.log(basicOp('*', 4, 2))

///////////////////////////////////////////////////////





