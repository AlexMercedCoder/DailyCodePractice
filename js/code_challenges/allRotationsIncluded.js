// https://www.codewars.com/kata/5700c9acc1555755be00027e/train/javascript

function containAllRots(strng, arr) {
    const rotations = strng.split("").map((item, index) => {
      if (index === 0){
        return strng
      } else {
        const slice1 = strng.split("").slice(index)
        const slice2 = strng.split("").slice(0, index)
        return [...slice1, ...slice2].join("")
      }
    })
    return rotations.every(r => arr.includes(r))
}