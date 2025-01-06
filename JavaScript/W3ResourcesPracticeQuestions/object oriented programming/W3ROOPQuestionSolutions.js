// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


//Q1
console.log("Q1");

class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  displayDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Country: ${this.country}`);
  }
}

// Create instances of the Person class
const person1 = new Person('Francisca Rohan', 25, 'USA');
const person2 = new Person('Raimond Aruna', 30, 'Netherlands');

// Display details of person1
console.log('Person-1 Details:');
person1.displayDetails();

// Display details of person2
console.log('\nPerson-2 Details:');
person2.displayDetails();
console.log("\nQ2");

//Q2
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Create an instance of the Rectangle class
const rectangle = new Rectangle(12, 10);

// Calculate area and perimeter of the rectangle
const area = rectangle.calculateArea();
const perimeter = rectangle.calculatePerimeter();

// Display the results
console.log(`Rectangle Area: ${area}`);
console.log(`Rectangle Perimeter: ${perimeter}`);
console.log("\nQ3");
//Q3
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayDetails() {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Doors: ${this.doors}`);
  }
}

// Create an instance of the Vehicle class
const vehicle = new Vehicle('Ford', 'F-150', 2020);

// Display vehicle details
console.log('Vehicle Details:');
vehicle.displayDetails();

// Create an instance of the Car class
const car = new Car('Honda', 'Accord', 2023, 4);

// Display car details
console.log('\nCar Details:');
car.displayDetails();


console.log("\nQ4");
//Q4 
class BankAccount {
    constructor(a, b) {
        this.accountNumber = a;
        this.balance = b;
    }
    
    deposit(amount) {
        this.balance += amount; 
    };
    
    withdraw(amount) {
        this.balance -= amount;
    };
    
    displayBalance() {
        console.log(`the current balance is ${this.balance}`);
    }
}

var Ba1 = new BankAccount("ax12", 1000);
Ba1.deposit(2500);
Ba1.displayBalance();

Ba1.withdraw(1200);
Ba1.displayBalance();
console.log("\nQ5");


//Q5
class Shape {
    constructor(st) {
        this.shapeType = st;
    }
    
    area() {
        
    }
}

class Circle extends Shape {
    constructor(shapeT, r) {
        super(shapeT);
        this.radius = r;
    }
    
    area() {
        return 3.141592653589793 * (this.radius*this.radius);    
    };
}


class Triangle extends Shape {
    constructor(shapeT, b, h) {
        super(shapeT);
        this.base = b;
        this.height = h;
    }
    
    area() {
        return 0.5 * this.base * this.height;
    };
}

var c1 = new Circle("circle", 3);
console.log(c1.area());

var t1 = new Triangle("triangle", 5, 11);
console.log(t1.area());
console.log("\nQ6");


class Employee {
    constructor(n, hs) {
        this.name = n;
        this.salary = hs;
    }
    
    annualSalary() {
        return 12 * this.salary;
    }
}

class Manager extends Employee {
    constructor(n, hs, d) {
        super(n, hs);
        this.department = d;
    }
    
    annualSalary() {
        const holdSal = super.annualSalary();
        const bonus = 0.1;
        return (bonus * holdSal) + holdSal;
    }
}

var e1 = new Employee("sara", 5200);
console.log(e1.annualSalary());

var m1 = new Manager("jason", 9600, "trades");
console.log(m1.annualSalary());

var m2 = new Manager("carl", 3200, "customer service");
console.log(m2.annualSalary());
console.log("\nQ7");

class Book {
    constructor(t, a, py) {
        this.title = t;
        this.author = a;
        this.publicationY = py;
    }
    
    displayDetails() {
        console.log(`this book title is ${this.title} author ${this.author} and 
        publication year is ${this.publicationY}`);
    }
    
}

class Ebook extends Book {
    constructor(title, author, publicationY, p) {
        super(title, author, publicationY);
        this.price = p;
    }
    
    displayDetails() {
         console.log(`this book title is ${this.title} author ${this.author} and 
        publication year is ${this.publicationY} the price ${this.price}`);
    }
}

var eb1 = new Ebook("how cars are made", "jason voorhees", 2012, 12.5);
eb1.displayDetails();
console.log("\n");

var b1 = new Book("101 rabbits", "sara menisgone", 2016);
b1.displayDetails();

console.log("\nQ8");

class Animal {
    constructor(sp, s) {
        this.species = sp;
        this.sound = s;
    }
    
    Sound() {
        console.log("this animal makes the sound " + this.sound);
    }
}

class Dog extends Animal {
    constructor(sp, s, color) {
        super(sp, s);
        this.color = color;
    }
    
    Sound() {
        super.Sound();
        console.log(`Color: ${this.color}`);
    }
}

const dog = new Dog('Dog', 'Woof woof!', 'Brown');
dog.Sound();

console.log("\nQ9");
class Bank {
    constructor(bankName, branchName) {
        this.bankName = bankName;
        this.branch = [];
        this.branch.push(branchName);
    }
    
    addABranch(branchName) {
        this.branch.push(branchName);
    }
    
    removeABranch() {
        this.branch.pop();
    }
    
    displayAllBranches() {
        for(let i = 0; i < this.branch.length; i++) {
            console.log(this.branch[i]);
        }
    }
    
}

const b1 = new Bank("bmo", "3131 branch 1");
b1.addABranch("4545 branch 25");
b1.addABranch("5212 branch 12");
b1.displayAllBranches();

//Q10
console.log("\nQ10");
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  calculateTotalPrice(quantity) {
    return this.price * quantity;
  }
}

class PersonalCareProduct extends Product {
  constructor(id, name, price, warrantyPeriod) {
    super(id, name, price);
    this.warrantyPeriod = warrantyPeriod;
  }

  calculateTotalPrice(quantity) {
    const totalPrice = super.calculateTotalPrice(quantity);
    return totalPrice + this.warrantyPeriod;
  }
}


// Create an instance of the PersonalCareProduct class
const personalCareProduct = new PersonalCareProduct(1, 'Shampoo', 10, 2);

// Calculate the total price
const totalPrice = personalCareProduct.calculateTotalPrice(3);

console.log(`Total Price: $${totalPrice}`);


console.log("\nQ11");
class BankAccount {
    constructor(an, ahn, b) {
        this.accountNumber = an;
        this.accountHolderName = ahn;
        this.balance = b;
    }
    
    withdraw(amount) {
        if(this.balance > amount) {
            this.balance -= amount;
            console.log(`new balance after the withdraw is ${this.balance}`);
        }else {
    console.log("error insufficient balance or withdraw amount greater then balance");
        }
    }
    
    deposit(amount) {
        this.balance += amount;
        console.log(`new balance after the deposit is ${this.balance}`);
    }
    
    transfer(obj1, amount) {
        var transferA = amount;
        
        if(obj1.balance > amount) {
            obj1.balance = obj1.balance - amount;
            this.balance = this.balance + amount;
            console.log(`transfered account balance is ${obj1.balance}`);
            console.log(`new account balance is ${this.balance}`);
        }else {
            console.log(`the transfer from this account ${obj1.accountNumber} has 
            insufficient funds and cannot be done please make a deposit or cancel 
            transaction`);
        }
    }
}


var ba1 = new BankAccount("2353", "jason", 5000);

var ba2 = new BankAccount("8439", "karl", 1650);

ba2.transfer(ba1, 1000);
ba1.deposit(1000);
ba1.withdraw(1250);

console.log("\nQ12");

class University {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }

  addDepartment(department) {
    this.departments.push(department);
    console.log(`Department "${department}" added to ${this.name}.`);
  }

  removeDepartment(department) {
    const index = this.departments.indexOf(department);
    if (index !== -1) {
      this.departments.splice(index, 1);
      console.log(`Department "${department}" removed from ${this.name}.`);
    } else {
      console.log(`Department "${department}" does not exist in ${this.name}.`);
    }
  }

  displayDepartments() {
    console.log(`Departments in ${this.name}:`);
    if (this.departments.length === 0) {
      console.log('No departments available.');
    } else {
      this.departments.forEach((department, index) => {
        console.log(`${index + 1}. ${department}`);
      });
    }
  }
}

const university = new University('ABC University');

university.displayDepartments(); 

university.addDepartment('Science');
university.addDepartment('Mathematics');
university.addDepartment('Physics');
university.displayDepartments();


university.removeDepartment('Mathematics');
university.displayDepartments();


university.removeDepartment('Chemistry');





