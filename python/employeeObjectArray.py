class Employee:
    def __init__(self, eN, eID):
        self.employeeName = eN
        self.employeeId = eID

    def outPutEmployeeInfo(self):
        print(f"employee name is {self.employeeName} and this employee id is {self.employeeId}\n")

def shuffleInOrder(sa):
    for employee in sa:
        employee.outPutEmployeeInfo()

if __name__ == "__main__":
    e1 = Employee("jason", 1875)
    e2 = Employee("karl", 8905)
    e3 = Employee("sara", 3459)
    e4 = Employee("jessica", 7621)

    eArr = [e1, e2, e3, e4]

    shuffleInOrder(eArr)
