// https://www.codewars.com/kata/55eca815d0d20962e1000106/train/javascript
function generateRange(min, max, step){
    const newArray = []
    
    for (let x = min; x <= max; x += step){
      newArray.push(x)
    }
    
    return newArray
    
  }