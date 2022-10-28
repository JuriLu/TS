// * BETTER COMMENTS
// !
// ?
// TODO:            



//? Object type

function printName( person:{firstName: string, lastName: string} ){
  console.log(`${person.firstName}, ${person.lastName}`);
  
}

printName(
     {
          firstName: 'asdf',
          lastName: 'asdf'
     }
)




//? More object type

// let coordinate: {x: number, y: number} = {x: 34}
let coordinate: {x: number, y: number} = {x: 34,y: 44};

//* Annotationg the return type with object type
function randomCoordinate(): {x: number, y: number} {
     return {x:2,y:3}
}


//? Excess Properties

// printName({firstName: "Mick", lastName: "Jagger", age: 23}) //! This doesn't work

const singer = {firstName: "Mick", lastName: "Jagger", age: 23}
printName(singer)                                              //! This works

/* NOTE:
 * It's because of a decision that TS developers made for this case. When write inline in the first case it will throw an error,
 * but when passed as a const it will not, but TS will check only for needed variables and will ignore the Excessive Properties
*/