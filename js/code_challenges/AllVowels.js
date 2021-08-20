// function vowelChange(str, vow) {
//     const result = str.matchAll(/[aeiou]/g)

//     const resultArr = [...result]

//     const final = resultArr.reduce((acc, item) => {
//         const stringArr = acc.split("")
//         stringArr[parseInt(item.index)] = vow
//         const r = stringArr.join("")
//         return r
//     }, str)

//     return final
// }

const vowelChange = (str, vow) => str.replace(/[aeiou]/g, vow)

console.log(vowelChange("hannah hannah bo-bannah banana fanna fo-fannah fee, fy, mo-mannah. hannah!",'i'))