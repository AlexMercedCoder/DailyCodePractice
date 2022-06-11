
const words2 = {
    a: ["array"],
    b: ["bob"],
    c: {
        a: ["car"],
        h: ["cheese"]
    }
}

const isThere = (word) => {
    const nextLevel = (word, obj) => {
        const nextLayer = obj[word[0]]
        if (nextLayer instanceof Array){
            return nextLayer
        } else {
            return nextLevel(word.split("").slice(1).join(""), nextLayer)
        }
    }

    return nextLevel(word, words2).includes(word)
}

console.log(isThere("bob"))