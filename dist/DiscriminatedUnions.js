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
    }
}
const stevie = {
    name: "Stevie Chicks",
    age: 2,
    weight: 5,
    kind: "rooster",
};
console.log(getFarmAnimalSound(stevie));
