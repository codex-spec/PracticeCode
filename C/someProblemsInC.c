#include <stdio.h>
#define MAX_SIZE 100

//int octalToDec(char s[], int size);
int power(int base, int exp);
int stringlen(char a[]);

void main() {
int c;
char my_strg[MAX_SIZE];
int i = 0;
while( ((c = getchar()) != EOF) && (c != '\n')) {
  if(c >= '0' && c <= '7' || c == '-') {
  my_strg[i] = c;   // *(my_strg=i) = c; my_strg++; in pointers
  i++;
}
}
int res=0, conv;
int k = i-1, j = 0;

for (k; k >= 0; k--) {
   if(my_strg[k] >= '0' && my_strg[k] <= '7') {
   conv = my_strg[k]-'0';
   res += conv * power(8, k);
 }else if(my_strg[k] == '-') {
     res = res * -1;
   }else {
     fprintf(stderr, "error not an octal #");
     break;
   }
   k--;
}
printf("%d\n", res);
}

int stringlen(char a[]) {
    int iter = 0;
    while (a[iter] != '\0') {
      iter++;
    }
    return iter;
}

int power(int base, int exp) {
  int res = 1; int i = 0;
  if(exp == 0) return 1;
  if(exp == 1) {return base;}else {
    while (i < exp) {
      res *= base;
      i++;
    }
  }
  return res;
}
