using System;
namespace helloworld
{
    class Program
    {
        static void Main(string[] args)
        {
            Dog sparky = new Dog("Sparky", 5);
            Console.WriteLine(sparky);
            sparky.bark();
        }
    }
    class Dog {
        string name;
        int age;
        public Dog(string nameDef, int ageDef){
            name = nameDef;
            age = ageDef;
        }
        public void bark(){
            Console.WriteLine("Woof!");
        }
    }
}

// dotnet run
