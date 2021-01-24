type traffic = | Red | Yellow | Green;;

let myBinding : traffic = Red;;

let trafficCheck (light:int) : traffic =
  if light == 0 then Red else if light == 1 then Yellow else Green;;

let cheese:traffic = trafficCheck(0);;


