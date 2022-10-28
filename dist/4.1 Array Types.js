"use strict";
//* ARRAY TYPES
//! line 5 won't work , because the type given to activeUsers is empty array
const activeUsersTest = [];
// activeUsersTest.push('steven')
//* Array of strings
const activeUsers = [];
activeUsers.push("Tony");
// activeUsers.push(99)
//* Array of numbers
const ageList = [45, 6, 123];
ageList[0] = 99;
// ageList[0] = 'string'
//? Another way to define array typws:  <Generic Type>
const bools = [];
bools.push(true);
//* Array of custom type
const coords = [];
coords.push({ x: 1, y: 2 });
// coords.push({ x: 'ddf', y: 2 });
//* Multidimensional array
const board = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"],
];
const demo = [[[1]]];
