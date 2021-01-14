// +& ARRAY METHODS #1 - Filter 
// +? Runs a function on each item on the array
// +? Returns new array of only items where function returned true
// +! Join the Slack/Discord Community at devNursery.com

const theArray = [1,2,3,4,5,6,7,8,9,10]

// The Function we will pass to filter, always takes item and index
const isEven = (item, index) => {
    return item % 2 === 0 //Returns true if its an even number
}

//Pass isEven to filter
//Filter will run isEven on each item in theArray
const filteredArray = theArray.filter(isEven)

console.log(filteredArray) // [2,4,6,8,10]



// +& ARRAY METHODS #2 - Map 
// +? Runs a function on each item on the array
// +? Returns new array of the returned value from each function call
// +! Join the Slack/Discord Community at devNursery.com

const theArray = [1,2,3,4,5,6,7,8,9,10]

// The Function we will pass to map, always takes item and index
const addOne = (item, index) => {
    return item + 1 //the current array item plus one
}

//Pass addOne to map
//map will run addOne on each item in theArray
const newArray = theArray.map(addOne)

console.log(newArray) // [2,3,4,5,6,7,8,9,10,11]



// +& ARRAY METHODS #3 - some
// +? Runs a function on each item on the array
// +? Returns true if the function returns true at least once
// +! Join the Slack/Discord Community at devNursery.com

const theArray = [1,2,3,4,5,6,7,8,9,10]

// The Function we will pass to some, always takes item and index
const isEven = (item, index) => {
    return item % 2 === 0 //Returns true if its an even number
}

//Pass isEven to some
//some will run isEven on each item in theArray
const areAnyEven = theArray.some(isEven)

console.log(areAnyEven) // true




// +& ARRAY METHODS #4 - every
// +? Runs a function on each item on the array
// +? Returns true if the function returns true every time
// +! Join the Slack/Discord Community at devNursery.com

const theArray = [1,2,3,4,5,6,7,8,9,10]

// The Function we will pass to every, always takes item and index
const isEven = (item, index) => {
    return item % 2 === 0 //Returns true if its an even number
}

//Pass isEven to every
//every will run isEven on each item in theArray
const areAllEven = theArray.every(isEven)

console.log(areAllEven) // false



// +& ARRAY METHODS #5 & #6 - find and findIndex
// +? Runs a function on each item on the array
// +? Returns the value or index of the first element that returns true
// +! Join the Slack/Discord Community at devNursery.com

const theArray = [1,2,3,4,5,6,7,8,9,10]

// The Function we will pass to find/findIndex, always takes item and index
const isEven = (item, index) => {
    return item % 2 === 0 //Returns true if its an even number
}

//Pass isEven to find/findIndex
//find/findIndex will run isEven on each item in theArray
const firstEvenValue = theArray.find(isEven)
const indexOfFirstEvenValue = theArray.findIndex(isEven)

console.log(firstEvenValue) // 2
console.log(indexOfFirstEvenValue) //1



// +& ARRAY METHODS #7 - Reduce
// +? Runs a function on each item on the array
// +? Returns the accumulated value
// +! Join the Slack/Discord Community at devNursery.com

const theArray = [1,2,3,4,5,6,7,8,9,10]

// The Function we will pass to reduce, always takes accumulated and currentValue
const addNext = (accumulated, currentValue) => {
    return accumulated + currentValue //The result becomes accumulated on next run
}

//Pass addNext to Reduce
//Reduce will pass initial value (0) as accumulated for the first run of addNext
//All subsequent runs will receive the return value of the previous run
const totalSum = theArray.reduce(addNext, 0)

console.log(totalSum) // 55