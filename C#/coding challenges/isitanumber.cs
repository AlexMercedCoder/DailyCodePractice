// https://www.codewars.com/kata/57126304cdbf63c6770012bd/train/csharp

using System;

public class CodeWars
{
  public static bool IsDigit(string s) 
  {
    int convertedInt;
    double convertedDouble;
    if (int.TryParse(s, out convertedInt)){
        return true;
    } else if (double.TryParse(s, out convertedDouble)){
        return true;
    } else {
        return false;
    }
  }
}