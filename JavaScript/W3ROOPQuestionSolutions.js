// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


//Q1
console.log("Try programiz.pro");

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
