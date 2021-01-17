#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {

    int result = atoi(argv[1]) + atoi(argv[2]);
    printf("0 is %s \n", argv[1]);
    printf("1 is %s \n", argv[2]);
    printf("result is %d \n", result);

}

// gcc -o args args.c && ./args 5 6