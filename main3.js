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
console.log(solution(str));