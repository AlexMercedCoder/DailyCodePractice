const anarr = [1,2,3,4,[5,6, [7,7, [7,7]]], 7 ,[8,9]]

// Shallow Non-Recursive Flatten
const flatten = (arr) => {
    const newArray = []
    arr.forEach(item => {
        if (item instanceof Array){
            item.forEach((sub) => {
                newArray.push(sub)
            })
        } else {
            newArray.push(item)
        }
    })
    return newArray
}

// Recursive Deep Flatten
const recursiveFlatten = (arr, newarr = [], index = 0) => {
    
    // If at the end of the array, return the new array so far
    if (arr.length === index) {
        return newarr
    }

    // if item is array, recurse then continue to next item
    if (arr[index] instanceof Array){
        newarr.push(...recursiveFlatten(arr[index]))
        return recursiveFlatten(arr, newarr, index + 1)
    }

    // if item is non-array, move to next item
    newarr.push(arr[index])
    return recursiveFlatten(arr, newarr, index + 1)

    
}