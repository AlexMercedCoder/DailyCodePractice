// https://www.codewars.com/kata/569e09850a8e371ab200000b/train/javascript

function preFizz(n) {
    const newArray = []
    
    //push numbers in the array up to the specified number
    for(let x = 1; x <= n; x++ ){
      newArray.push(x)
    }
    
    return newArray
  }