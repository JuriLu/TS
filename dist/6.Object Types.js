"use strict";
// * BETTER COMMENTS
// !
// ?
// TODO:            
//* Object type
function printName(person) {
    console.log(`${person.firstName}, ${person.lastName}`);
}
printName({
    firstName: 'asdf',
    lastName: 'asdf'
});
//* More object type
// let coordinate: {x: number, y: number} = {x: 34}
let coordinate = { x: 34, y: 44 };
//* Annotationg the return type with object type
function randomCoordinate() {
    return { x: 2, y: 3 };
}