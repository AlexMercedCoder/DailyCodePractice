(* HASH MAPS *)

let myMap = Js.Dict.empty ()
let () = Js.Dict.set myMap "Name" "Alex Merced"
let () = Js.log myMap

(* RECORDS *)

type person = {
  name: string;
  age: int;
} [@@bs.deriving abstract]

let alex = person ~name:"Alex Merced" ~age:34

let () = Js.log alex

(* FUNCTION AND CURRYING *)

let addOne x = x + 1

let result = addOne 5

let () = Js.log result

let addThree x y z = x + y + z

let one = addThree 1
let two = one 2
let three = two 3

let () = Js.log three