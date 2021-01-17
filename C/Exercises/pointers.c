#include <stdio.h>
#include <string.h>

int addOne(int *x){
    *x = *x + 1;
    printf("x is %d \n", *x);
}

int main() {

int num = 5;
int *numptr = &num;

addOne(&num);
printf("num is %d \n", num);
printf("numptr is %p \n", numptr);



}

// gcc -o pointers pointers.c && ./pointers