"use strict";
//* GENERICS
//* Function accept number or string and return number or string, but don't know which
// function doThing(thing: number | string): number | string {}
//* Custom Generics
const numss = [1, 2, 2];
const numsss = [4, 44, 423, 23, 234, 34, 2];
const inputEl = document.querySelector("#username");
console.dir(inputEl);
inputEl.value = "Changed";
function numberIdentity(item) {
    return item;
}
function strinIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
function identity(item) {
    return item;
}
identity('test');
identity(3);
identity(true);
