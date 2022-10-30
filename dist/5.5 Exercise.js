"use strict";
// Highscore boolean or number
let highscore;
//array named stuffTest, array of numbers or array of strings, not mix
let stuffTest = [1, 2, 3, 4];
const james = {
    name: "James",
    age: 23,
    sport: "snwoboard",
    level: "Advanced",
};
console.log(james);
// Array that can have a mix of both color types
const colorsTest = [];
function greet2(names) {
    if (typeof names === "string") {
        return `Hello ${names}`;
    }
    else {
        for (let name of names) {
            return `Hello ${name}`;
        }
    }
}
