(* // https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/ocaml *)

(* string reverse function found here https://gist.github.com/philtomson/960227 *)
let string_rev str =
  (* Define function that matches charachter in string to pattern *)
  let rec aux  idx = match idx with
    (* If the index is 0 then return the string *)
    0 -> Char.escaped (str.[0])
    (*If any other index, append then run the match again*)
  | _ -> (Char.escaped str.[idx]) ^ (aux (idx-1)) in
(*invoke the function passing the final index, the rest recursively are called*)
 aux ((String.length str)-1) ;;

let is_palindrome (s: string): bool = 
 (* lowercase the string *)
 let lc = String.lowercase_ascii s in
 print_endline lc;
 (* reverse the lower case string *)
 let rev = string_rev lc in
 print_endline rev;
 (* test equality of the strings *)
 rev = lc;;