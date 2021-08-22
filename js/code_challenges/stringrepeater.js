// https://www.codewars.com/kata/585a1a227cb58d8d740001c3/train/javascript

function repeater(string, n){
    console.log(string, n)
    let result = string;
    for (let x = 1; x < n; x++) result += string;
    return result;
  }