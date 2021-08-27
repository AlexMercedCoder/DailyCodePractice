// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

function reverseWords(str) {
    return str.split(" ").map(x => x.split("").reverse().join("")).join(" ")
  }