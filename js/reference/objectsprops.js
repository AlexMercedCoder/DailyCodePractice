const util = require("util")

const alex = {
    name: "Alex Merced",
    valueOf(){
        return 36
    },
    [util.inspect.custom]: function(){
        return this.name
    }
}

console.log(alex + alex)
console.log(alex)