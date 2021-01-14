#include <iostream>
#include <string>
#include <cstring>

using namespace std;
class Dog {
    public:
    string name;
    int age;
    Dog(string n, int a);
    void bark();
};

Dog::Dog(string n, int a){
    name = n;
    age = a;
}

void Dog::bark(){
    std::cout << "Woof! \n";
}

int main() {
    Dog sparky("Sparky", 5);
    sparky.bark();
}



// g++ -o test test.cpp && ./test