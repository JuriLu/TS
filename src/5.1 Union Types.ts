// * Union Types allow us to give a value a few different possible types.

let age: number | string | boolean = 21;

age = 24;
age = "string";
age = true;

//* Example 2
type PointUnion = {
  x: number;
  y: number;
};
type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 3 };  //? Point type

coordinates = { //? Loc Type
  lat: 76.44,
  long: 83.11,
};
