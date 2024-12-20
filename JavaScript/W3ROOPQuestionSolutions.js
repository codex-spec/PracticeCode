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






