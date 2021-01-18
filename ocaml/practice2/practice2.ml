(* DECLATE A TYPE OF RECORD *)
type person = {name : string; age : int};;

(* RECORD CAN BE IMPLIED BASED ON PROPERTIES *)
let alex = {name = "Alex"; age = 5};;

(* ACCESS THE PROPERTIES WITH DOT NOTATION *)
let () = print_endline alex.name;;

let () = print_endline(string_of_int(alex.age));;
