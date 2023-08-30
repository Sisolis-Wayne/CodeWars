// 'abc' => ['ab', 'c_']
// 'abcdef' => ['ab', 'cd', 'ef']
// '' => []

const solution = (str) => {
    if (str) {
        let newArr = [];

        for (let i = 0; i < str.length; i += 2) {
            newArr.push(str.slice(i, i + 2));
        }

        if (newArr[newArr.length - 1].length < 2) newArr[newArr.length - 1] += '_';
        return newArr;
    } else {
        return [];
    }
}

let str = '';
let str1 = 'abc';
console.log(solution(str1));


const test = 2;
const result = test.toString(2);
console.log(typeof (result));

const addBinary = (a, b) => (a + b).toString(2);

console.log(addBinary(1, 2))
