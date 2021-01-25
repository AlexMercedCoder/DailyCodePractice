// https://www.codewars.com/kata/50654ddff44f800200000007/train/typescript

export function shortLongShort(a:string, b:string) {
    if (a.length > b.length){
    return b + a + b
    } else {
    return a + b + a
    }
  }