//Type predicates

interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {  //* return true or false based
                                                    //* on the animal that is turned 
                                                    //* in, that has the
                                                    //*  property num lives is
                                                    //* undefined or not , that is how 
                                                    //* we check in the function make 
                                                    //* noise

  return (animal as Cat).numLives !== undefined;
  //? STILL THIS DOESN'T NARROW THE TYPE, THAT IS WHERE TYPE PREDICATE GOES ON  in the return syntax of the function
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    animal;
    return "meow";
  } else {
    return "woof";
  }
}
