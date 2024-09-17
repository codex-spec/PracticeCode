import java.util.*;

class people {
    String name; 
    boolean employee;
    
    people(String n, boolean e) {
        this.name = n;
        this.employee = e;
    }
    
    String getName() {return this.name;}
    boolean getEmployee() {return this.employee;}
    void changeName(String other) {this.name = other;}
}

class planes {
    int numbOfPlanes;
    String compName;
    public List<people> numbOfPassengers;
    
    planes(int numb, String comp, List<people> numP) {
        this.numbOfPlanes = numb;
        this.compName = comp;
        this.numbOfPassengers = numP;
    }

    int getNumPlanes() {return this.numbOfPlanes;}
    String getCompName() {return this.compName;}
    
    public List<people> getNumOfPassengers() {return numbOfPassengers;}
}

class airport {
    String airportName;
    private List<planes> p;
    
    airport(String name, List<planes> pl) {
        this.airportName = name;
        this.p = pl;
    }
    
    int countNumbOfPassengers() {
        int count = 0;
        List<people> npe;
        for(planes i : p) {
            npe = i.getNumOfPassengers();
            for(int k = 0; k < npe.size(); k++) {
                count++;
            }
        }
        return count;
    }
    
    int countNumbOfEmployees() {
        int c = 0;
        List<people> ne;
        for(planes pl : p) {
            ne = pl.getNumOfPassengers();
            for(people k : ne) {
                if(k.getEmployee()) {
                    c++;
                }
            }
        }
        return c;
    }
    
    int countNumbOfNonEmployees() {
        return countNumbOfPassengers() - countNumbOfEmployees();
    }
}

class Main {
    public static void main(String[] args) {
        people p1 = new people("james", false);
        people p2 = new people("carson", false);
        people p3 = new people("lisa", true);
        people p4 = new people("sara", true);
        int n = 4;
        List<people> ListPeople = new ArrayList<people>(n);
        ListPeople.add(p1);
        ListPeople.add(p2);
        ListPeople.add(p3);
        ListPeople.add(p4);
        
        people p1o = new people("james", true);
        people p2o = new people("jessie", false);
        people p3o = new people("lisa", true);
        int n1 = 3;
        List<people> ListPeopleO = new ArrayList<people>(n1);
        ListPeople.add(p1o);
        ListPeople.add(p2o);
        ListPeople.add(p3o);
        
        people p1a = new people("bob", true);
        people p2a = new people("selena", true);
        int n2 = 2;
        List<people> ListPeopleA = new ArrayList<people>(n2);
        ListPeopleA.add(p1a);
        ListPeopleA.add(p2a);
        
        planes pl1 = new planes(12, "air canada", ListPeople);
        planes pl2 = new planes(3, "vemo", ListPeopleO);
        planes pl3 = new planes(7, "interSell", ListPeopleA);
        int m = 3;
        List<planes> play = new ArrayList<planes>(m);
        play.add(pl1);
        play.add(pl2);
        play.add(pl3);
        
        airport pearson = new airport("pearJusSon", play);
        System.out.println("total number of passengers in pearJusSon airport:");
        System.out.println(pearson.countNumbOfPassengers());
        
        System.out.println("number of nonemployees");
        System.out.println(pearson.countNumbOfNonEmployees());
        
    }
}

