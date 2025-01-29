class employee {
    String employeeName = "";
    int employeeId = 0;
    employee(String eN, int eID) {
        this.employeeName = eN;
        this.employeeId = eID;
    }
    
public void outPutEmployeeInfo() {
    System.out.println("empoyee name is " + this.employeeName + " and this employee id is " + this.employeeId + "\n");
    }
}

class Main {
    public static void shuffleInOrder(employee[] sa) {
        for(int i = 0; i < sa.length; i++) {
            sa[i].outPutEmployeeInfo();
        }
    }
    
    public static void main(String[] args) {
        employee e1 = new employee("jason", 1875);
        employee e2 = new employee("karl", 8905);
        employee e3 = new employee("sara", 3459);
        employee e4 = new employee("jessica", 7621);
        
        employee[] eArr = {e1,e2,e3,e4};
        
        shuffleInOrder(eArr);
        
    }
}