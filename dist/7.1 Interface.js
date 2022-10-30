"use strict";
//* INTERFACES   DESCRIBES THE SHAPE OF AN OBJECT AND ONLY OBJECT
const pt = { x: 123, y: 123 };
const Thomas = {
    id: 7734,
    first: "Thomas",
    last: "LastName",
    sayHi: () => {
        return "Hello";
    },
};
// Thomas.id = 3
Thomas.nickname = "test";
const shoes = {
    name: "Shoes Blue",
    price: 3342,
    applyDiscount(discount) {
        return discount * this.price;
    },
};
console.log(shoes.applyDiscount(0.2));
const Elton = {
    name: 'Elton',
    age: 0.5,
    breed: "Aus Shephard",
    bark() {
        return `Woof Woof`;
    }
};
const chewy = {
    name: "Chewy",
    age: 3,
    breed: 'Lab',
    bark() {
        return `Woof `;
    },
    job: "Drug Dog"
};
const Eng = {
    name: 'Elton',
    id: 73,
    email: 'this@gmail.com',
    level: 'Senior'
};
