// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript

String.prototype.isUpperCase = function() {
    return this.split("").every((l) => l === l.toUpperCase())
  }