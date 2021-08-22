// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num){
    return parseInt(String(num).split("").map(x => parseInt(x)**2).join(""))
  }


console.log(squareDigits(2112)) // 4114