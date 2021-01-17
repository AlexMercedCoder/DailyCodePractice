#include <stdio.h>
#include <string.h>


int wrapper(int(*cheese)()){
    return cheese();
}

int fun(){
    return 5;
}


int main() {

printf("%d \n", wrapper(fun));

}




// gcc -o funcptr funcptr.c && ./funcptr