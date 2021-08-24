// https://www.codewars.com/kata/5e8dd197c122f6001a8637ca/train/javascript

const removeDuplicateIds = (obj) => {
    const keys = Object.keys(obj).map(x => parseInt(x)).sort((x,y) => (x-y)).reverse()
    console.log(keys)
    const found = []
    for (key of keys) {
        obj[key] = obj[key].filter(letter => {
            if (found.includes(letter)){
                return false
            } else {
                found.push(letter)
                return true
            }
        })
    }
    return obj
};


const obj3 = {
    "432": ["A", "A", "B", "D"],
    "53": ["L", "G", "B", "C"],
    "236": ["L", "A", "X", "G", "H", "X"],
    "11": ["P", "R", "S", "D"],
  };
const result3 = removeDuplicateIds(obj3);
console.log(result3)