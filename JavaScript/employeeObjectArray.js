class Employee {
    constructor(eN, eID) {
        this.employeeName = eN;
        this.employeeId = eID;
    }
    
    outPutEmployeeInfo() {
        console.log("employee name is " + this.employeeName + " and this employee id is " + this.employeeId + "\n");
    }
}

function shuffleInOrder(sa) {
    for (let i = 0; i < sa.length; i++) {
        sa[i].outPutEmployeeInfo();
    }
}

const e1 = new Employee("jason", 1875);
const e2 = new Employee("karl", 8905);
const e3 = new Employee("sara", 3459);
const e4 = new Employee("jessica", 7621);
const eArr = [e1, e2, e3, e4];

shuffleInOrder(eArr);

