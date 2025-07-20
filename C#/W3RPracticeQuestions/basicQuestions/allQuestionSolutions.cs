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
    
    public static void Main(string[] args)
    {
        Console.WriteLine ("Try programiz.pro");
        Console.WriteLine(helloName("sarvarei"));
        Console.WriteLine(sumOfTwo(4, 3));
        
    }
}
