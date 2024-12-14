// Online C# Editor for free
// Write, Edit and Run your C# code using C# Online Compiler

using System;

public class HelloWorld
{
    
    public static void printArray(int[] someA) {
        for(int i = 0; i < someA.Length; i++) {
            Console.Write(someA[i] + " ");
        }
    }
    
    public static void reverseArray(int[] sa) {
        for(int j = sa.Length-1; j >= 0; j--) {
            Console.Write(sa[j] + " ");
        }
    }
    
    public static int sumArrayEle(int[] a) {
        int s = 0;
        for(int i = 0; i < a.Length; i++) 
        {
            s+=a[i];
        } 
        return s;
    }
    
    private static int[] copyFromOneToAnother(int[] a1, int[] a2) {
        int[] na = new int[a1.Length+a2.Length]; int k = 0;
        
        for(int j = 0; j < a1.Length; j++) {
            na[k] = a1[j];
        }
        
        for(int l = 0; l < a2.Length; l++) {
            na[k] = a2[l];
        }
        return na;
    }
    
    private static int duplicantCount(int[] arr) {
        int c = 0;
        for(int i = 0; i < arr.Length; i++) {
            for(int j = 0; j < arr.Length; j++) {
                if(j == i) continue;
                else {
                    if(arr[i] == arr[j]) {
                        c++;
                    }
                }
            }
        }
        return (c/2);
    }
    
    private static void printAllUniqueElements(int[] ar) {
        int sig = 0, h = 0;
        for(int i = 0; i < ar.Length; i++) {
            h = i;
            for(int j = 0; j < ar.Length; j++) {
                if(ar[i] == ar[j] && i != j) {
                    sig = 1;
                    break;
                }else if(i == j) continue;
            }
            if(sig == 0) {
                Console.Write(ar[h] + " ");
            }
            sig = 0;
        }
    }
    
    
    //Come back to question 7
    private static int[] mergeTwoArrays(int[] ar1, int[] ar2) {
       int[] arr1 = new int[100];  
        int[] arr2 = new int[100];  
        int[] arr3 = new int[200];  
        int s1, s2, s3;  
        int i, j, k;  

        Console.Write("\n\nMerge two arrays of same size sorted in ascending order.\n");
        Console.Write("------------------------------------------------------------\n");

        Console.Write("Input the number of elements to be stored in the first array :");
        s1 = Convert.ToInt32(Console.ReadLine());  

        Console.Write("Input {0} elements in the array :\n", s1);  
        for (i = 0; i < s1; i++){
            Console.Write("element - {0} : ", i);
            arr1[i] = Convert.ToInt32(Console.ReadLine());  
        }

        Console.Write("Input the number of elements to be stored in the second array :");
        s2 = Convert.ToInt32(Console.ReadLine());  

        Console.Write("Input {0} elements in the array :\n", s2);  
        for (i = 0; i < s2; i++) {
            Console.Write("element - {0} : ", i);
            arr2[i] = Convert.ToInt32(Console.ReadLine()); 
        }
        s3 = s1 + s2;

        for (i = 0; i < s1; i++) {
            arr3[i] = arr1[i]; 
        }
        for (j = 0; j < s2; j++) {
            arr3[i] = arr2[j];  
            i++;
        }

        for (i = 0; i < s3; i++) {
            for (k = 0; k < s3 - 1; k++) {
                if (arr3[k] >= arr3[k + 1]) {
                    j = arr3[k + 1];
                    arr3[k + 1] = arr3[k];
                    arr3[k] = j;
                }
            }
        }

        Console.Write("\nThe merged array in ascending order is :\n");
        for (i = 0; i < s3; i++)
        {
            Console.Write("{0} ", arr3[i]);
        }
        Console.Write("\n\n");
    }
    
    //Q8 write a c# program to count the frequency of each element in an array
    //     Dictionary<string, string> My_dict = new Dictionary<string, string>();
    //     Adding key/value pairs in the Dictionary
    //     Using Add() method
    //     My_dict.Add("a.01", "C");
    //     My_dict.Add("a.02", "C++");
    //     My_dict.Add("a.03", "C#");
    private static void countFrequency(int[] ar) {
        int[] fre = new int[ar.Length];
        
        for(int i = 0; i < ar.Length; i++) {
            for(int j = 0; j < ar.Length; j++) {
                if(i == j) continue;
                else {
                    
                }
            }
        }
    }
    
    
    public static void Main(string[] args)
    {
        Console.WriteLine ("Try programiz.pro");
        int a = 7;
        Console.WriteLine(a);
        
        int[] sa = {4,7,2,2,5,42,42,23,62,62};
        printArray(sa);
        Console.WriteLine("\n");
        reverseArray(sa);
        Console.WriteLine("\n");
        Console.WriteLine(sumArrayEle(sa));
        Console.WriteLine("\n");
        Console.WriteLine(duplicantCount(sa));
        Console.WriteLine("\n");
        int[] a1 = {2,7,4,67,3};
        int[] a2 = {6,54,1,9};
        Console.Write(mergeTwoArrays(a1, a2));

        
        printAllUniqueElements(sa);
        
    }
    
}
