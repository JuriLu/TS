"use strict";
`'any' is an escape hatch, it turns off type checking`;
//the any type
let thing = "hello";
thing = 1;
thing = "1";
thing = false;
thing();
thing.toUpperCase() `It lets you do all these, but it's not supposed to be like this`;
let thing2 = 'hello';
// thing2()
