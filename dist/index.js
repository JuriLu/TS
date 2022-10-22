"use strict";
//Type predicates
function isCat(animal) {
    return animal.numLives !== undefined;
    // return true or false based on the animal that is turned in has the 
    //   property num lives is undefined or not , that is how we check in the function make noise
    // STILL THIS DOESN'T NARROW THE TYYPE, THAT IS WHERE TYPE PREDICATE GOES ON  in the return syntax of the function
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal;
        return 'meow';
    }
    else {
        animal;
    }
}
