"use strict";
// * Union Types allow us to give a value a few different possible types.
let age = 21;
age = 24;
age = "string";
age = true;
let coordinates = { x: 1, y: 3 }; //? Point type
coordinates = {
    lat: 76.44,
    long: 83.11,
};
