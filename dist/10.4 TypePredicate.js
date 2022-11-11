"use strict";
//Type predicates
function isCat(animal) {
    //* on the animal that is turned 
    //* in, that has the
    //*  property num lives is
    //* undefined or not , that is how 
    //* we check in the function make 
    //* noise
    return animal.numLives !== undefined;
    //? STILL THIS DOESN'T NARROW THE TYPE, THAT IS WHERE TYPE PREDICATE GOES ON  in the return syntax of the function
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal;
        return "meow";
    }
    else {
        return "woof";
    }
}
