// Highscore boolean or number
let highscore: boolean | number;

//array named stuffTest, array of numbers or array of strings, not mix

let stuffTest: number[] | string[] = [1, 2, 3, 4];

//literal type skillLevel with 4 types

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

//Type SkiSchoolStudent

type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snwoboard";
  level: SkillLevel;
};

const james: SkiSchoolStudent = {
  name: "James",
  age: 23,
  sport: "snwoboard",
  level: "Advanced",
};

console.log(james);

// 2 Type color RGB and HSL

type RGB = {
  r: number;
  g: number;
  b: number;
};

type HSL = {
  h: number;
  s: number;
  l: number;
};

// Array that can have a mix of both color types

const colorsTest: (RGB | HSL)[] = [];

function greet(names: string | string[]) {
  if (typeof names === "string") {
    return `Hello ${names}`;
  } else {
    for (let name of names) {
      return `Hello ${name}`;
    }
  }
}
