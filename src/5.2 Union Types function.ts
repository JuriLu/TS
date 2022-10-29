//* Union types with functions

function printAge(age: number | string) {
  console.log(`You are ${age} yeard old`);
}

printAge(23);
printAge("23");

//* Must check type , because depending on the type of the parameter we want to make actions
//* we do this with TYPE NARROWING
function calculateTax(price: number | string, tax: number) {
  //  return price * tax   THIS WON'T DO
  // price.replace("$","")  THIS WON'T DO
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", "")); //? Remove $ and convert it to number
  } else {
    return price * tax;
  }
}

45.5; //? Price as number
("$45.50"); //? Price as string, in this case for e.x we want to remove $
