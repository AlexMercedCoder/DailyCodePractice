// https://www.codewars.com/kata/5264d2b162488dc400000001/train/typescript

export class Kata {
    static spinWords(words: string) {
      const fixedWords: Array<string> = words.split(" ").map((word) => {
        if (word.length >= 5){
          return word.split("").reverse().join("")
        } else {
          return word
        }
      })
      
      return fixedWords.join(" ")
      }
  }