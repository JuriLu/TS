"use strict";
//* Can not create an instance of abstract class
//* IT CAN DEFINE METHODS AND PROPERTIES THAT MUST EXIST IN CLASSES THAT
//* INHERIT THE ABSTRACT CLASS
class Cat {
}
class Employee {
    first;
    last;
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("Hello");
    }
}
class fulltimeEmployee extends Employee {
    salary;
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class parttimeEmploye extends Employee {
    hourlyRate;
    hoursWorked;
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const Betty = new fulltimeEmployee("Betty", "White", 5000);
const bill = new parttimeEmploye("Bill", "White", 30, 600);
