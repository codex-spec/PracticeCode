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
    
    //question 11
    public static void messageOfAge(int n) {
        Console.WriteLine("this is your age" + n);
    }
    
    //question 12
    // public static string numberInRows(int n) {
    //     string out = "" + n + " " + n + " " + n + " " + n +"\n";
    //     out += "" + n+""+n+""+n+""+n+"\n";
    //     out += "" + n + " " + n + " " + n + " " + n +"\n";
    //     out += "" + n+""+n+""+n+""+n+"\n";
    //     return out;
    // }
    
    //question 13
    public static string repeatNumberInRow(int n) {
        string res = ""+n+""+n+""+n+"\n";
        res += ""+n+" "+n+"\n";
        res += ""+n+" "+n+"\n";
        res += ""+n+""+n+""+n+"";
        return res;
    }
    
    //question 14 
    public static string celsiusToKelvinAndFarenheit(int c) {
        double k = c + 273.15;
        double f = (c * (9/5)) + 32;
        string res = "the degrees in c is " + c 
        + "that c in kelvin is" + k + "and in farenheit is" + f;
        return res;
    }
    
    //question 15 
    public static string removeAChar(string str, int ind) {
        return str.Remove(ind, 1);
    }
    
    //question 16
    public static string swapFirstAndLast(string str) {
        return (str.Length > 1) ? str.Substring(str.Length-1) 
        + str.Substring(1, str.Length - 2) + str.Substring(0, 1) : str;
    }
    
    //question 17
    public static string addFirstCharToFrontAndBack(string str) {
        return str.Substring(0,1) + str + str.Substring(0,1);
    }
    
    //question  18 
    public static bool checkIfTwoIntAreDiffPosAndNeg(int n1, int n2) {
        return (n1 > 0 && n2 < 0 || (n1 < 0 && n2 > 0));
    }
    
    //question 19 
    public static int sumOrTriple(int n1, int n2) {
        return (n1 != n2) ? (n1+n2) : (3*(n1+n2));
    }
    
    //questiom 20 
    public static int abosluteDiffDoulbeIfFGS(int n1, int n2) {
        if(n1 > n2) {
            int sum = Math.Abs(n1-n2);
            sum = 2 * sum;
            return sum;
        }
        return Math.Abs(n1-n2);
    }

    //question 21
    public static bool check20OrSum20(int n1, int n2) {
        return (n1 == 20 || n2 == 20 || ((n1+n2) == 20));
    }
    
    //question 22
    public static bool within20Of100Or200(int n) {
        return (n >= 80 && n <= 120 || (n >= 180 && n <= 220));
    }
    
    public static void Main(string[] args)
    {
        Console.WriteLine(removeAChar("abdullah", 2));
        Console.WriteLine(swapFirstAndLast("hello"));
        Console.WriteLine(addFirstCharToFrontAndBack("hello world"));
        Console.WriteLine(checkIfTwoIntAreDiffPosAndNeg(-25, 6));
        Console.WriteLine(checkIfTwoIntAreDiffPosAndNeg(5, -6));
        Console.WriteLine(checkIfTwoIntAreDiffPosAndNeg(25, 6));
        Console.WriteLine(checkIfTwoIntAreDiffPosAndNeg(-25, -6));
        Console.WriteLine(sumOrTriple(10,10));
        Console.WriteLine(abosluteDiffDoulbeIfFGS(4, 5));
        Console.WriteLine(check20OrSum20(10, 10));
        Console.WriteLine(within20Of100Or200(87));
        Console.WriteLine(within20Of100Or200(287));
        Console.WriteLine ("Try programiz.pro");
    }
}
