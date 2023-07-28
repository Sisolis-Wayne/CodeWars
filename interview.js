const isHappy = (n, pow) => {
    // let newStringNum = n.toString().split('')
    // console.log(newStringNum)
    console.log(n, pow)

    let saveArr = [n];
    function run(z) {
        let m = z.toString().split('').reduce((acc, curr) => acc += Math.pow(curr, pow), 0)

        saveArr.push(m)
        console.log(saveArr)

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

console.log(isHappy(7, 2))
console.log(isHappy(42, 2))
// console.log(isHappy(7, 3))
// isHappy(89547, 4)