// https://www.codewars.com/kata/54fe05c4762e2e3047000add/javascript

function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;

  this.isWorthIt = function () {
    const weight = this.draft - this.crew * 1.5;
    console.log(weight)
    return weight >= 20;
  };
}

const canoe = new Ship(10, 2)
console.log(canoe.isWorthIt())

const titanic = new Ship(30, 6)
console.log(titanic.isWorthIt())

const cruise = new Ship(25, 4)
console.log(cruise.isWorthIt())
