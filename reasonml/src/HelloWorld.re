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