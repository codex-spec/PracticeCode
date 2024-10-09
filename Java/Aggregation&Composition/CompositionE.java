import java.util.*;

class cells {
    String cellTypeName;
    int cellTypes;
    cells(String cTN, int cT) {
        this.cellTypeName = cTN; this. cellTypes = cT;
    }
}

class organs {
    int organCount;
    List<cells> organTypeCell;
    organs(int o, List<cells> oTC) {
        this.organCount = o; this.organTypeCell = oTC;
    }
    
    public List<cells> getOrganTypeOfCellList() {return this.organTypeCell;}
}

class Person {
    String name;
    double weight;
    int height;
    //List<cells> cellList = new ArrayList<cells>();
    List<organs> organsList = new ArrayList<organs>();
    
    Person(String n, int w, int h, /*List<cells> cL,*/ List<organs> oL) {
        this.name = n; this.weight = w; this.height = h;
        //this.cellList = cL; 
        this.organsList = oL;
    }
    
    Person(String na, double we) {
        this.name = na;
        this.weight = we;
    }
    
    //public List<cells> getCellList() { return this.cellList; }
    public List<organs> getOrgansList() { return this.organsList; }
    
    public int calculateOrganNumberInHuman(List<organs> oL) {
        return oL.size();
    }
    
    public int calculateCellTypeNumberInHuman() {
        int count = 0;
        List<cells> cList;
        
        for(organs i : organsList) {
            cList = i.getOrganTypeOfCellList();
            for(int k = 0; k < cList.size(); k++) {
                count++;
            }
        }
        return count;
    }
}

class Main {
    
    public static void main(String[] args) {
            cells c1 = new cells("blood", 1);
            cells c2 = new cells("bone", 2);
            cells c3 = new cells("stem", 3);
            cells c4 = new cells("nerve cells", 4);
            cells c5 = new cells("muscle cells", 5);
            List<cells> cL1 = new ArrayList<cells>();
            cL1.add(c1);
            cL1.add(c2);
            cL1.add(c3);
            cL1.add(c4);
            cL1.add(c5);
            
            cells c6 = new cells("blood", 6);
            cells c7 = new cells("stem", 7);
            cells c8 = new cells("muscle", 8);
            cells c9 = new cells("nerve", 9);
            List<cells> cL2 = new ArrayList<cells>();
            cL2.add(c6);
            cL2.add(c7);
            cL2.add(c8);
            cL2.add(c9);
            
            cells c10 = new cells("blood", 10);
            cells c11 = new cells("stem", 11);
            cells c12 = new cells("muscle", 12);
            cells c13 = new cells("nerve", 13);
            List<cells> cL3 = new ArrayList<cells>();
            cL3.add(c10);
            cL3.add(c11);
            cL3.add(c12);
            cL3.add(c13);
            
            organs skele = new organs(1, cL1);
            organs heart = new organs(2, cL2);
            organs neckMuscles = new organs(3, cL3);
            
            List<organs> oL1 = new ArrayList<organs>();
            oL1.add(skele);
            oL1.add(heart);
            oL1.add(neckMuscles);
            
            Person p1 = new Person("Jason", 170, 185, oL1);
            
            if(p1.getOrgansList().size() < 75 && p1.calculateCellTypeNumberInHuman() < 200) {
                System.out.println("The person " + p1.name + " is not alive");
            }else {
                System.out.println("The person " + p1.name + " is alive");
            }
            System.out.println("The organCount is " + p1.getOrgansList().size() + " and the number of organ cell types are " + p1.calculateCellTypeNumberInHuman());
    }
}
