const sumArray = (arr, start = 0) => {
    if (arr.length <= 0){
        return start
    } else {
        const newStart = Number(start) + Number(arr.splice(0, 1))
        return sumArray(newStart, arr)
    }
}

console.log(sumArray([1,2,3,4,5,6], 0))