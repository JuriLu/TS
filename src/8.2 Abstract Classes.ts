//* Can not create an instance of abstract class

//* IT CAN DEFINE METHODS AND PROPERTIES THAT MUST EXIST IN CLASSES THAT
//* INHERIT THE ABSTRACT CLASS
abstract class Cat {}




abstract class Employee {
  constructor(public first: string, public last: string) {}

  abstract getPay(): number; //* abstract getPay must be implemented to child class
  greet() {
    console.log("Hello");
  }
}

class fulltimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }

  getPay(): number {
    return this.salary;
  }
}

class parttimeEmploye extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const Betty = new fulltimeEmployee("Betty", "White", 5000);
const bill = new parttimeEmploye("Bill", "White", 30, 600);
