// +& LEARN MORE AT devNursery.com and AlexMercedCoder.com  

const recRev = (str) => {
    //Sub-Function that builds the string in reverse, passed in the last index of string
    buildString = (lastIndex) => {
        switch(lastIndex){
            // If the index is 0, return the letter
            case 0:
                return str[0]
                break
            // for any other index, return the string plus the recursive call on next index
            default:
                 return str[lastIndex] + buildString(lastIndex - 1)
        }
    }

    // return the result of the sub-function passing the last index to kick things off
    return buildString(str.length-1)
}

console.log(recRev("cheese"));
console.log(recRev("hello"));