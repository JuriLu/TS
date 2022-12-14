`Parameter type annotation`;

//Ex1
function square(num: number) {
  // num.toUpperCase()
  // num()

  return num * num;
}

square(3);

//EX2
const encourageStudent = (name: string) => {
  console.log(`Hello ${name}, you are doing great!!! `);
};

encourageStudent("Student");

//Parameter Default Value
function greet(person: string = "stranger") {
  return `Hi there, ${person}!`;
}

greet();
greet("Juri");
