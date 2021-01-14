#include <stdio.h>
#include <string.h>

struct Dog {
   char name[50];
   int age;
};

void bark(struct Dog dog){
   printf("%s is barking", dog.name);
}

int main() {
   // printf() displays the string inside quotation
   struct Dog sparky;
   strcpy (sparky.name, "Sparky");
   sparky.age = 5;
   printf("%s \n", sparky.name );
   printf("%d \n", sparky.age );
   bark(sparky);
}

// gcc -o test test.c && ./test