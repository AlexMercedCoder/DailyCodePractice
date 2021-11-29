// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/scala

object Reverse {

  def solution(word: String): String = {
     var a = word.split("").toList;
     var b = a.reverse.mkString;
     return b
  }

  def main(args: Array[String]){
      println(solution("cheese"))
  }

}