// https://www.codewars.com/kata/54fe05c4762e2e3047000add/train/csharp

public class Ship
{
  public int Draft;
  public int Crew;
  
  public Ship(int draft, int crew)
  {
    Draft = draft;
    Crew = crew;
  }
  
  public bool IsWorthIt()
  {
    double weight = this.Draft - (this.Crew * 1.5);
    if (weight >= 20){
    return true;
    } else {
    return false;
    }
    
  }
  
}