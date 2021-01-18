type person = {name : string; age : int};;

let alex = {name = "Alex"; age = 5};;

let () = print_endline alex.name;;

let () = print_endline(string_of_int(alex.age));;
