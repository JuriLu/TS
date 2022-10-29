`'any' is an escape hatch, it turns off type checking`;

//the any type

let thing: any = "hello";
thing = 1;
thing = "1";
thing = false;
// thing();
// thing.toUpperCase()`It lets you do all these, but it's not supposed to be like this`;

let thing2 = "hello";
// thing2()



//Delayed initialization and Implicit any
const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];

// let foundMovies;
let foundMovies: string;

for (let movie of movies) {
  if (movie === "Amadeus") foundMovies = "Amadeus";
}
