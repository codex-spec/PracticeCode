#include <iostream>
#include <string>

void ViewNo(int number) {
    std::cout << number;
}

void View(int number) {
    int divisor = 10000;
    int quotient = number / divisor;
    ViewNo(quotient);
    int remainder = number % divisor;
    divisor = 10;
    quotient = remainder / divisor;
    remainder = remainder % divisor;
    if (quotient != 0) {
        View(quotient);
    }
    ViewNo(remainder);
}

int FormNo(int number, int& count) {
    int result = 0;
    for (int i = 0; i < count; ++i) {
        result = result * 10 + (number % 10);
        number /= 10;
    }
    return result;
}

int InputNo() {
    int number = 0;
    char ch;
    int count = 0;
    while (true) {
        std::cin.get(ch);
        if (ch == '\n') {
            break;
        }
        number = number * 10 + (ch - '0');
        count++;
        ViewNo(ch - '0');
    }
    return FormNo(number, count);
}

int main() {
    std::cout << "1-Add\n2-Multiply\n3-Subtract\n4-Divide\n";
    char choice;
    std::cin.get(choice);
    
    switch (choice) {
        case '1': {
            std::cout << "\nEnter First No: ";
            int first = InputNo();
            std::cout << "\nEnter Second No: ";
            int second = InputNo();
            int result = first + second;
            std::cout << "\nResult: ";
            View(result);
            break;
        }
        case '2':
            // Implement Multiply
            break;
        case '3':
            // Implement Subtract
            break;
        case '4':
            // Implement Divide
            break;
        default:
            std::cout << "\nChoice Error\n";
            break;
    }
    std::cout << "\nThank you for using the calculator! Press any key...\n";
    std::cin.get();
    return 0;
}

