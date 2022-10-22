"use strict";
// Discriminated unions  DU
// Creating the exact literal type
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case "pig":
            return "oink";
        case "cow":
            return "moo";
        case "rooster":
            return "that mf sound";
        default:
            // We should never make it here, if we handled all cases correctly
            const shouldNeverGetHere = animal; //error type sheep is not assignable to type never
    }
}
const stevie = {
    name: "Stevie Chicks",
    age: 2,
    weight: 5,
    kind: "rooster",
};
console.log(getFarmAnimalSound(stevie));
