(* Bind expressions to name using let *)
let cheese = 
  (* You can create bindings within bindings *)
  let gouda = 5 + 5 in
  (* The Original expression returns the express after "in" *)
  10 + gouda;;

let () = print_endline (string_of_int cheese);;
