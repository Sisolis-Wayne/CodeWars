console.log(345 % 10)
console.log(345 / 10)

console.log(34.5 % 10)
console.log(34.5 / 10)

console.log(3.45 % 10)
console.log(3.45 / 10)


const sumOfDigits = n => {
    if (n <= 0) {
        return 0;
    } else {
        let rem = n % 10;
        let div = Math.floor(n / 10);
        // console.log(sumOfDigits(div))
        return rem + sumOfDigits(div);
    }
}

console.log(sumOfDigits(3456))