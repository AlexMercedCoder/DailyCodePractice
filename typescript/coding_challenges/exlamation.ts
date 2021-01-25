// https://www.codewars.com/kata/57fae964d80daa229d000126

export function remove(s: string): string {
    const split:Array<string> = s.split("")
    if (split[split.length - 1] === "!"){
      split.splice(split.length-1, 1)
    }
    return split.join("")
  }