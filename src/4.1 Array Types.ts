//* ARRAY TYPES

//! line 5 won't work , because the type given to activeUsers is empty array
const activeUsersTest: [] = [];
// activeUsersTest.push('steven')

//* Array of strings
const activeUsers: string[] = [];
activeUsers.push("Tony");
// activeUsers.push(99)

//* Array of numbers
const ageList: number[] = [45, 6, 123];
ageList[0] = 99;
// ageList[0] = 'string'

//? Another way to define array typws:  <Generic Type>
const bools: Array<boolean> = [];
bools.push(true);




type PointArray = {
  x: number;
  y: number;
};

//* Array of custom type
const coords: PointArray[] = [];
coords.push({ x: 1, y: 2 });
// coords.push({ x: 'ddf', y: 2 });

//* Multidimensional array
const board : string[][] =
[
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];


const demo: number[][][] = [[[1]]]