#include <stdio.h>
#include <string.h>

void helloName(const char* name) {
    printf("hello %s\n", name);
}

int sumOfTwo(int n1, int n2) {
    return n1 + n2;
}

int divideTwoNum(int n1, int n2) {
    return n1 / n2;
}

void question4() {
    printf("%d\n", -1 + 4 * 6); 
    printf("%d\n", (35 + 5) % 7); 
    printf("%d\n", 14 + -4 * 6 / 11); // 14 - (24 / 11) = 14 - 2 = 12
    printf("%d\n", 2 + 15 / 6 * 1 - 7 % 2);
}

void swapTwoNumbers(int num1, int num2) {
    int h = num1;
    num1 = num2;
    num2 = h;
    printf("num1 is %d and num2 is %d\n", num1, num2);
}

int multiply3(int a, int b, int c) {
    return a * b * c;
}

void operations(const char* op, int num1, int num2) {
    if (strcmp(op, "+") == 0) {
        printf("%d\n", num1 + num2);
    } else if (strcmp(op, "-") == 0) {
        printf("%d\n", num1 - num2);
    } else if (strcmp(op, "/") == 0) {
        printf("%d\n", num1 / num2);
    } else if (strcmp(op, "x") == 0) {
        printf("%d\n", num1 * num2);
    } else if (strcmp(op, "mod") == 0) {
        printf("%d\n", num1 % num2);
    } else {
        printf("invalid input\n");
    }
}

int main() {
    printf("question 1\n");
    helloName("sarvarei");
    
    printf("\nquestion 2\n");
    printf("%d\n", sumOfTwo(4, 3));
    
    printf("\nQuestion 3\n");
    printf("%d\n", divideTwoNum(10, 3));
    
    printf("\nQuestion 4\n");
    question4();
    
    printf("\nquestion 5\n");
    swapTwoNumbers(5, 6);
    
    printf("\nQuestion 6\n");
    printf("%d\n", multiply3(2, 10, 7));
    
    printf("\nquestion 7\n");
    operations("x", 5, 9);
    operations("-", 27, 9);
    operations("+", 11, 9);
    operations("/", 90, 9);
    operations("mod", 111, 9);
    
    return 0;
}
