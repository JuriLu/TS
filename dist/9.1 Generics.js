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
identity("test");
identity(3);
identity(true);
//* Example
function getRandomElement(list) {
    const randId = Math.floor(Math.random() * list.length);
    return list[randId];
}
getRandomElement(["a", "b", "c", "d"]);
getRandomElement([1, 7, 25, 334, 656]);
getRandomElement([1, 4, 5, 7, 10]); //* Inferred type , ts knows that this generic type is number
//* There are times that we need to specify
// [4,5,6,7]
// [true,false,true]
// [{},{},{}]
//* Generic with multiple types & Constrain Types [extends object]
//* out of all types T and U have to be objects
function merge(obj1, obj2) {
    //* Automatically knows the return type
    return {
        ...obj1,
        ...obj2,
    };
}
const comboObj = merge({ x: "1", y: "2" }, { a: 1, b: 2 });
//! Must include extends Lengthy
function printDoubleLength(thing) {
    return thing.length * 2;
}
// printDoubleLength(8)
console.log(printDoubleLength("asdf;aksjdfo"));
class Playlist {
    queue = [];
    add(el) {
        this.queue.push(el);
    }
}
const song = new Playlist();
const videos = new Playlist();
videos.add({ title: "Video", creator: "creator", resolution: "1440 px" });
