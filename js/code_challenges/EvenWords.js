// https://www.codewars.com/kata/5650ab06d11d675371000003/train/javascript

var splitInParts = function(s, partLength){
    const loops = s.length/partLength
    const strarr = s.split("")
    const result = []
    for (let x = 0; x < loops; x++){
      result.push(strarr.splice(0, partLength).join(""))
    }
    return result.join(" ")
  }