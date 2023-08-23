const duplicateEncode = word => {
    let arr = []
    for (let m = 0; m < word.length; m++) {
        // console.log(word[m])

        let re = new RegExp(`${word[m]}`, 'gi')
        if (word.match(re).length === 1 && word[m] !== '(') arr.push(word.replace(re, '(')[m])
        if (word.match(re).length > 1 && word[m] !== '(') arr.push(word.replace(re, ')')[m])
        // if (word[m] === '(') 

    }

    return arr.join('')

}




// solved in index.js
console.log(duplicateEncode('Success'))
// console.log(duplicateEncode('(@'))

let str = 'A(meuyo'
let str3 = '((()'
let str2 = ['me', 'milk']
console.log(typeof (str))
console.log(typeof (str2))
// console.log(/i/g.test(str))
// console.log(/'('/g.test(str2))
console.log(str.charCodeAt(0))
console.log(str.charCodeAt(1))
