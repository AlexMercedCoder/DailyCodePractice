let () = Js.log "Hello World"

(* EMBEDDED JAVASCRIPT *)

let ejs = [%raw {|[1,2,3,4,5].reverse()|}]

let () = Js.log ejs

(* Interpolation *)

let string = "World"

let string2 = {j|Hello $string|j}

let () = Js.log string2