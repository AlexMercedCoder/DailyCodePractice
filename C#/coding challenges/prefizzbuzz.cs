// https://www.codewars.com/kata/569e09850a8e371ab200000b/train/csharp

public class Kata
{
  public static int[] PreFizz(int n) 
  {
    int[] newArray = new int[n];
    
    for (int x = 0; x < n; x++ ){
        newArray[x] = x + 1;
    }
    return newArray;
  }
}