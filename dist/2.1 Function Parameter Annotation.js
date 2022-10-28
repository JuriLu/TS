"use strict";
`Parameter type annotation`;
//Ex1
function square(num) {
    // num.toUpperCase()
    // num()
    return num * num;
}
square(3);
//EX2
const encourageStudent = (name) => {
    console.log(`Hello ${name}, you are doing great!!! `);
};
encourageStudent("Student");
//Parameter Default Value
function greet(person = "stranger") {
    return `Hi there, ${person}!`;
}
greet();
greet("Juri");
