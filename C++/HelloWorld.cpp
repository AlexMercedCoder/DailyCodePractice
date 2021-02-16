#include <iostream>

using namespace std;

int addNums (int x, int y){
    return x + y;
}

int main() {
    int num = addNums(5, 6); //returns 11
    std::cout << "Hello World \n";
}



// g++ -o HelloWorld HelloWorld.cpp && ./HelloWorld