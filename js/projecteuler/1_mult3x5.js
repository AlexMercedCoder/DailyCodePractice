// https://projecteuler.net/problem=1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.

const sumMultiples = (limit) => {
  const multiples = [];

  for (let num = 0; num < limit; num++) {
    if (num % 3 === 0) {
      multiples.push(num);
    } else if (num % 5 === 0) {
      multiples.push(num);
    }
  }

  return multiples.reduce((acc, item) => acc + item, 0);
};

const result = sumMultiples(1000);
console.log(result);
