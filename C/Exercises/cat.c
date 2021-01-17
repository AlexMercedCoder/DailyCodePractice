#include <stdio.h>
#include <string.h>

struct Cat {
    char name[10];
    int age;
};



int main() {

    struct Cat mittens;

    mittens.age = 2;
    strcpy(mittens.name, "Mittens");

    printf("%s is %d years old \n", mittens.name, mittens.age);

}




// gcc -o cat cat.c && ./cat