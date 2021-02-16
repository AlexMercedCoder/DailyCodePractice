// https://www.codewars.com/kata/56f6919a6b88de18ff000b36/train/go

package kata

func HowManyDalmatians(x int) string {
  
  dogs := []string{"Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"}
  
  if x <= 10 {
    return dogs[0]
  } 
  if x <= 50{
    return dogs[1]
  }
  if x <= 100{
    return dogs[2]
  }
  if x == 101{
    return dogs[3]
  }
    return "oops"
}