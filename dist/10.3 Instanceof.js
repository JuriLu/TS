"use strict";
//* Insstance of
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString);
    }
    else {
        console.log(new Date(date).toUTCString);
    }
}
class UserTest {
    username;
    constructor(username) {
        this.username = username;
    }
}
class Company {
    name;
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof UserTest) {
        entity;
    }
    else {
        entity;
    }
}
