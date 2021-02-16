// https://projecteuler.net/problem=2

// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

const evenFin = (num, arr = []) => {
  //   console.log(arr);
  if (arr.length === 0) {
    arr.push(1, 2, 3);
  }
  if (arr[arr.length - 1] >= num) {
    return arr
      .filter((item) => item % 2 === 0)
      .reduce((acc, item) => acc + item, 0);
  } else {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return evenFin(num, arr);
  }
};

console.log(evenFin(4000000));
