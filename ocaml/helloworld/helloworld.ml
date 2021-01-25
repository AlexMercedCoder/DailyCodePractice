let () = print_endline "Hello, World!"
let stringOrInt x =
  match x with
  | 5 -> "integer"
  | 6 -> "string"
  | _ -> "none";;

let () = print_endline(stringOrInt 5);;
let () = print_endline(stringOrInt 6);;
let () = print_endline(stringOrInt 7);;