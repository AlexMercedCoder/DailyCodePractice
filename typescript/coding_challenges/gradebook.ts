// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

export function getGrade(...grades:Array<number>):string {
    const avg: number = grades.reduce((acc, item) => acc += item , 0) / grades.length
    
    if (avg < 60){
      return "F"
    } else if (avg < 70 ){
      return "D"
    } else if (avg < 80){
      return "C"
    } else if (avg < 90){
      return "B"
    } else {
      return "A"
    }
  }