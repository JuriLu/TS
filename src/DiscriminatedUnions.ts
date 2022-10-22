// Discriminated unions  DU
// Creating the exact literal type

/* In this case of the 3 interfaces all the properties are the same
    We don't know how to separate them from each-other, so we use DU, through kind property
*/

interface Rooster {
  name: string;
  age: number;
  weight: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

type FarmAnimal = Pig | Rooster | Cow;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "pig":
      return "oink";
    case "cow":
      return "moo";
    case "rooster":
      return "that mf sound";
  }
}

const stevie: Rooster = {
  name: "Stevie Chicks",
  age: 2,
  weight: 5,
  kind: "rooster",
};

console.log(getFarmAnimalSound(stevie));
