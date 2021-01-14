#include <stdio.h>

void arrayChange(int arr[3]){
    arr[1]=5;
}

int main() {
    int cheese[3] = {1,2,3};
    arrayChange(cheese);
    printf("%d \n", cheese[1]);
}



// gcc -o arrayfuncs arrayfuncs.c && ./arrayfuncs