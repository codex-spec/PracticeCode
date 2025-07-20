#include <iostream>
#include <string>

class w3rbasicPQ
{
public:
    // question 1
    static std::string helloName(const std::string& name) {
        return "hello " + name;
    }
    
    // question 2
    static int sumOfTwo(int n1, int n2) {
        return n1 + n2;
    }
    
    // question 3
    static int divideTwoNum(int n1, int n2) {
        return n1 / n2;
    }
    
    // question 4
    static void question4() {
        std::cout << -1 + 4 * 6 << std::endl; 
        std::cout << (35 + 5) % 7 << std::endl; 
        std::cout << 14 + -4 * 6 / 11 << std::endl; // 14 - (24 / 11) = 14 - 2 = 12
        std::cout << 2 + 15 / 6 * 1 - 7 % 2 << std::endl;
    }
    
    // question 5 
    static void swapTwoNumbers(int num1, int num2) {
        int h = num1;
        num1 = num2;
        num2 = h;
        std::cout << "num1 is " << num1 << " and num2 is " << num2 << std::endl;
    }
    
    // Question 6 
    static int multiply3(int a, int b, int c) {
        return a * b * c;
    } 
    
    // Question 7
    static void operations(const std::string& op, int num1, int num2) {
        if (op == "+") {
            std::cout << num1 + num2 << std::endl;
        } else if (op == "-") {
            std::cout << num1 - num2 << std::endl;
        } else if (op == "/") {
            std::cout << num1 / num2 << std::endl;
        } else if (op == "x") {
            std::cout << num1 * num2 << std::endl;
        } else if (op == "mod") {
            std::cout << num1 % num2 << std::endl;
        } else {
            std::cout << "invalid input" << std::endl;
        }
    }
    
    static void Main() {
        std::cout << "question 1" << std::endl;
        std::cout << helloName("sarvarei") << std::endl;
        
        std::cout << "\nquestion 2" << std::endl;
        std::cout << sumOfTwo(4, 3) << std::endl;
        
        std::cout << "\nQuestion 3" << std::endl;
        std::cout << divideTwoNum(10, 3) << std::endl;
        
        std::cout << "\nQuestion 4" << std::endl;
        question4();
        
        std::cout << "\nquestion 5" << std::endl;
        swapTwoNumbers(5, 6);
        
        std::cout << "\nQuestion 6" << std::endl;
        std::cout << multiply3(2, 10, 7) << std::endl;
        
        std::cout << "\nquestion 7" << std::endl;
        operations("x", 5, 9);
        operations("-", 27, 9);
        operations("+", 11, 9);
        operations("/", 90, 9);
        operations("mod", 111, 9);
    }
};

int main() {
    w3rbasicPQ::Main();
    return 0;
}
