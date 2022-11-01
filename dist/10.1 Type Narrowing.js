"use strict";
//* typeof Guard 
function triple(value) {
    if (typeof value === 'string') {
        return value.repeat(3);
    }
    return value * 3;
}
console.log(triple(3));
console.log(triple('3'));
//* Truthiness Guard
const el = document.getElementById('idk'); //* Type here   HTMLElement | null
if (el) {
    el; //* Type here   HTMLElement
}
else {
    el; //* Type here   null
}
const printLetters = (word) => {
    if (word) { //* check for not undefined
        for (let char of word) {
            console.log(char);
        }
    }
};
//* Equality narrowing
function someDemo(x, y) {
    if (x === y) { //* if    x and y are of the same type
        x.toUpperCase;
        y.toUpperCase;
    }
}
