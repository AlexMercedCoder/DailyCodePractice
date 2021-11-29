import Array._

object Scratch {
   /* This is my first java program.  
   * This will print 'Hello World' as the output
   */
   def main(args: Array[String]) {
     var Alex = Map("name" -> "Alex Merced", "age" -> "36")
     println(f"The name is ${Alex("name")}%s");
     println(f"The age is ${Alex("age")}%s");

   }

   def Hello(num: Int, num2: Int):Int = {
       println(f"num is $num%d");
       printf("num2 is %d \n", num2);
       return num + num2;
   };
}