// Online C# Editor for free
// Write, Edit and Run your C# code using C# Online Compiler

using System;

public class w3rbasicPQ
{
    //question 1
    public static string helloName(string name) {
        return "hello " + name;
    }
    
    //question 2
    public static int sumOfTwo(int n1, int n2) {
        return n1+n2;
    }
    
    //Question 3 
    public static int divideTwoNum(int n1, int n2) {
        return (n1/n2);
    }
    
    //question 4
    public static void operation() {
        Console.WriteLine(-1 + 4 * 6); 
        Console.WriteLine((35 + 5) % 7);
        Console.WriteLine(14 + -4 * 6 / 11);
        Console.WriteLine(2 + 15 / 6 * 1 - 7 % 2);
    }
    
    //question 5
    public static void swapTwoNum(int n1, int n2) {
        int h = n1;
        n1 = n2;
        n2 = n1;
        Console.WriteLine("swap numbers before" + n1 + "" + n2 + " these are the swap numebrs " + n1 + "" + n2);
    }
    //question 6
    public static int multiply3Num(int n1, int n2, int n3) {
        return n1 * n2 * n3;
    }
    //question 7
    public static void arthcOpe(string op, int n1, int n2) {
        switch(op) {
            case "+":
            Console.WriteLine(n1+n2);
            break;
            
            case "-":
            Console.WriteLine(n1-n2);
            break;
            
            case "/":
            Console.WriteLine(n1/n2);
            break;
            
            case "*":
            Console.WriteLine(n1*n2);
            break;
            
            case "%":
            Console.WriteLine(n1%n2);
            break;
            
            default:
            Console.WriteLine("invalid input");
            break;
        }
            
    }
    
    //question 8 
    public static void multiplicationOfNum(int n) {
        for(int i = 0; i <= 10; i++) {
            Console.WriteLine(n * i);
        }
    }
    
    //Question 9 
    public static int avgOf4(int n1, int n2, int n3, int n4) {
        return (n1+n2+n3+n4)/4;
    }
    
    //Question 10 
    public static string someFormula(int n1, int n2, int n3) {
        int r1 = (n1+n2)*n3;
        int r2 = (n1*n2)+(n2*n3);
        string res = "result of the numbers" + n1 + "and" + n2 + "and" + n3 + 
        "with operation (x+y)*z is" + r1 + " and (x*y)+(y*z) is" + r2;
        return res;
    }
    
    public static void Main(string[] args)
    {
        Console.WriteLine ("Try programiz.pro");
        Console.WriteLine(helloName("sarvarei"));
        Console.WriteLine(sumOfTwo(4, 3));
        
        operation();
        
    }
}
