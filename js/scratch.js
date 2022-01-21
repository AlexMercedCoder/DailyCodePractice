// Variables
const a = 5
const b = 6
const op = "+"

// using eval
console.log(eval(`${a} ${op} ${b}`))

// using function contructor
console.log((new Function('a','b',`a ${op} b`)(a,b)))