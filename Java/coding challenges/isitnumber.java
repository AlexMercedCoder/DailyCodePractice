// https://www.codewars.com/kata/57126304cdbf63c6770012bd/train/java

public class MyUtilities{

    public boolean isDigit(String s)
    {
        try {
          int convertedInt = Integer.parseInt(s);
          return true;
        } catch (NumberFormatException err) {
          try{
            double convertedDouble = Double.parseDouble(s);
            return true;
          } catch (NumberFormatException err2) {
            return false;
            }
          
        }
    }
  }