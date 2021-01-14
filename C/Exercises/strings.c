#include <stdio.h>
#include <string.h>

int main() {
   char hello[] = "Hello World";
   char hello2[12];
   strcpy(hello2, hello);
   printf("Hello is %s \n", hello);
   printf("Hello is %s \n", hello2);
}

// gcc -o strings strings.c && ./strings