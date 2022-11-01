//* INTERFACES   DESCRIBES THE SHAPE OF AN OBJECT AND ONLY OBJECT

interface PointInterface {
  x: number;
  y: number;
}

const pt: PointInterface = { x: 123, y: 123 };

//* READONLY AND OPTIONAL + METHODS IN INTERFACE;
interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string; //* Must include a function sayHi that returns a string
}

const Thomas: Person = {
  id: 7734,
  first: "Thomas",
  last: "LastName",
  sayHi: () => {
    return "Hello";
  },
};
// Thomas.id = 3
Thomas.nickname = "test";




//* INTERFACE METHOD PARAMETERS

interface ProductInterface {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: ProductInterface = {
  name: "Shoes Blue",
  price: 3342,
  applyDiscount(discount: number) {
    return discount * this.price;
  },
};

console.log(shoes.applyDiscount(0.2));




//* REOPEN INTERFACE

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}


const Elton: Dog = {
    name: 'Elton',
    age: 0.5,
    breed: "Aus Shephard",
    bark(){
        return `Woof Woof`
    }
}




//* Extending Interface

interface ServiceDog extends Dog {
    job: "Drug Dog" | "Bomb" | "Sniffer"
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 3,
    breed: 'Lab',
    bark() {
        return `Woof `
    },
    job: "Drug Dog"
}




//* Can Extend Multiple Interfaces

interface PersonTT { 
    name: string
}

interface EmployeeTT {
    readonly id: number,
    email: string
}

interface Engineer extends PersonTT,EmployeeTT{
    level: string
}


const Eng : Engineer = {
    name:'Elton',
    id: 73,
    email: 'this@gmail.com',
    level: 'Senior'
}