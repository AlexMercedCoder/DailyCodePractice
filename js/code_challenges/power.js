// https://www.codewars.com/kata/562926c855ca9fdc4800005b/train/javascript

function numberToPower(number, power) {
  let result = number;

  if (!power) {
    return 1;
  }

  for (let x = 0; x < power - 1; x++) {
    result *= number;
    console.log(result);
  }

  return result;
}
