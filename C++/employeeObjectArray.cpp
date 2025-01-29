#include <iostream>
#include <string>
#include <vector>

class Employee {
    std::string employeeName;
    int employeeId;

public:
    Employee(std::string eN, int eID) : employeeName(eN), employeeId(eID) {}

    void outPutEmployeeInfo() {
        std::cout << "employee name is " << employeeName << " and this employee id is " << employeeId << "\n";
    }
};

void shuffleInOrder(std::vector<Employee>& sa) {
    for (size_t i = 0; i < sa.size(); i++) {
        sa[i].outPutEmployeeInfo();
    }
}

int main() {
    Employee e1("jason", 1875);
    Employee e2("karl", 8905);
    Employee e3("sara", 3459);
    Employee e4("jessica", 7621);

    std::vector<Employee> eArr = {e1, e2, e3, e4};

    shuffleInOrder(eArr);

    return 0;
}
