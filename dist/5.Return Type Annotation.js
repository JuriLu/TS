"use strict";
`Also the return type of a function can be annotated`;
//Function with return type
const addNums = (x, y) => {
    return x + y;
};
addNums(5, 5); // returns number
function square(num) {
    num * num; // returns void
}
`Anonymous function contextual typing`;
// In this case the parameter type are infered
const colors = ["red", "orange", "yellow"];
const changed = () => {
    colors.map((color) => {
        color.toUpperCase();
    });
};
`Void Return Type`;
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
    // return `alksdfj`
}
