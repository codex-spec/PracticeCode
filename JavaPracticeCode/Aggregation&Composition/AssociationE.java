import java.io.*;
import java.util.*;

 class alive {
    String name;
    boolean alive;
    alive(String n, boolean ali) {
        this.name = n;
        this.alive = ali;
    }
    
    boolean getLife() {return this.alive;}
    
}

class person {
    String name;
    int age;
    double weight;
    
    person(String na, int a, double w) {
        this.name = na;
        int age = a;
        this.weight = w;
    }
    
    String getName() { return this.name;}
    int getAge() { return this.age;}
    double getWeight() { return this.weight; }
    
}

class Main {
    
    boolean cIfAlive(int age) {
        if(age > 0 && age <= 120) {return true;}
        else {return false;}
    }
    
    public static void main(String[] args) {
        alive a1 = new alive("samson", true);
        alive a2 = new alive("carson", false);
        int n = 2;
        ArrayList<alive> list1 = new ArrayList<alive>(n); //n will be the amount of alive objects
        
        list1.add(a1);
        list1.add(a2);
        
        person p1 = new person("samson", 27, 160);
        person p2 = new person("carson", 6, 60);
        ArrayList<person> list2 = new ArrayList<person>(n);
        list2.add(p1);
        list2.add(p2);
        
        for(int i = 0; i < list1.size(); i++) {
            if(list1.get(i).getLife() == true) System.out.println(list1.get(i).name + " is alive and weighs " + list2.get(i).getWeight());
            else System.out.println(list1.get(i).name + " is dead and weighs " + list2.get(i).getWeight());
        }
        
    }
    
}

