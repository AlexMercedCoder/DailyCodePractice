#include <stdio.h>

char* sayHello(char str[]); 

int main() {
    printf("%s \n", sayHello("Cheese"));
    printf("%s \n", sayHello("Cheese"));
    printf("%s \n", sayHello("Cheese"));
}

char* sayHello(char str[]){

    return str;

}


// gcc -o funcs funcs.c && ./funcs