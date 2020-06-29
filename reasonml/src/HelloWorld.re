/* BASIC HELLO WORLD */

Js.log("Hello World");

/* using block scope in assignments */

let myVar = {
    let part1 = "Hello ";
    let part2 = "World";
    part1 ++ part2
};

Js.log(myVar);

/* USING A RECORD */

type person = {
    name: string,
    mutable age: int
};

let alex:person = {
    name: "Alex Merced",
    age: 34
};

Js.log(alex);

/* USING A VARIANT AND SWITCH */

type character = 
  | Hero(string)
  | Villain(string)
  | Support;

let superman = Hero("Superman")

let result = 
switch(superman){
| Hero(name) => "I am " ++ name ++ " and I'm here to save the day"
| Villain(name) => "I am " ++ name ++ " and I'm here to ruin the day"
| Support => "I am just me"};

Js.log(result)

/* LISTS AND ARRAYS */

let myList:list(int) = [1,2,3,4,5]

Js.log(myList)

let nextList = [0, ...myList]

Js.log(nextList)

let myArray:array(int) = [|1,2,3|]

Js.log(myArray)
Js.log(myArray[2])

/* FUNCTIONS AND CURRYING */

let myFunc = (x, y, z) => x + y + z;

let one = myFunc(1);
let two = one(2);
let three = two(3);

Js.log(three);

/* LABELED FUNCTION ARGUMENTS */

let thisFunc = (~first, ~last) => {
    first ++ " " ++ last;
};

Js.log(thisFunc(~last="Merced", ~first="Alex"));

/* IF AND ELSE */

let myIf = if(false){
    5
} else {
    6
}

Js.log(myIf)

/* THE PIPE OPERATOR */

let addOne = (x) => x + 1

let myResult = 5
    ->addOne
    ->addOne
    ->addOne

Js.log(myResult)