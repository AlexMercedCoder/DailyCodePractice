#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int* arrayMethod(int arr[], int length, int newItem){

    int *newArray;
    int newLength = length + 2;

    newArray = malloc(newLength * sizeof(int));

    for (int x = 0; x < length; x++){
        newArray[x] = arr[x];
    }

    newArray[length] = newItem;

    printf("%d \n", newItem);
    printf("%d \n", newArray[length]);

    return newArray;
}

int main(int argc, char *argv[]) {

    int* anArray;

    int theArr[] = {1,2,3,4,5};

    int theArrLength = sizeof theArr/ sizeof theArr[0];

    anArray = arrayMethod(theArr, theArrLength, 6);

    printf("%d \n", anArray[5]);

    printf("%d \n", theArrLength);

    theArrLength = sizeof *anArray/ sizeof anArray[0];

    anArray = arrayMethod(anArray, theArrLength, 7);

    printf("%d \n", anArray[6]);

    printf("%d \n", theArrLength);

    free(anArray);



}

// gcc -o arrays arrays.c && ./arrays