let arri = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]
let arrir = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
let arrira = []
// let arry = null

function countPositivesSumNegatives(input) {
    if (input) {
        let count = [0, 0];
        // input.forEach(a => {
        //     if (a > 0) {
        //         count[0]++;
        //     }
        // });

        let sum = 0;

        for (let i = 0; i < input.length; i++) {
            if (input[i] < 0) {
                sum += input[i];
                count[1] = sum;
            }
            if (input[i] > 0) {
                count[0]++;
            }
        }
        // count[1] = sum
        if (input.length <= 0) {
                let emp = [];
                return emp;
            }
        return count;
    } else {
        let m = []
        return m;
    }
}

// console.log(countPositivesSumNegatives(arry))

// const countPositivesSumNegatives = (input, pos = 0, neg = 0) => input.reduce((acc, curr) => curr > 0 ? [pos++] : [pos, neg += curr], [])

console.log(countPositivesSumNegatives(arri))


//////////////////////////////////////////////////////////////////////////

// function isPrime(num) {
//         let notPrime = false;

//     if (num == 0 || num == 1 || num !== Math.abs(num)) {
//         return false
//         }

//         // for (let v = 2; v <= num; v++) {
//         //     if (num % v === 0 && v !== num) {
//         //         notPrime = true;
//         //         return false;
//         //     }
//         // }

//         if (notPrime === false) {
//             return true;
//         }
// }




// function isPrime(number) {
//     let isPrime = true;

//     // check if number is equal to 1
//     if (number === 1) {
//         return false
//     }

//     // check if number is greater than 1
//     else if (number > 1) {

//         // looping through 2 to number-1
//         for (let i = 2; i < number; i++) {
//             if (number % i == 0) {
//                 isPrime = false;
//                 break;
//             }
//         }

//         if (isPrime) {
//             return true;
//         } else {
//             return false;
//         }
//     }

// // check if number is less than 1
//     else {
//         return false
//     }
// }



const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= Math.floor(s); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}



console.log(isPrime(4))
console.log(isPrime(0))
console.log(isPrime(-7))
console.log(isPrime(-41))
console.log(isPrime(11))
console.log(isPrime(41))
console.log(isPrime(4999))
console.log(isPrime(-4999))
console.log(isPrime(-41))

console.log(Math.sqrt(53))

console.log(isPrime())