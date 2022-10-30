//* Tuple   Is an array with a fixed lengthm and ordered with a fix set of types
//* It exists only in ts

const stuffTest2: (string|number)[] = ['asd','asdasdsad'] //? Array

let color: [number,number,string] 
// color = []
// color = [1,1]
// color = [1,1,1]
 color = [1,1,'string']  //* only this is Correct, 3 elements,first 2 are numbers, the last is string


 //* TUPLE PART 2

 //? TUPLE WITH HTTP CODE AND ERROR MESSAGE

 type HTTPResponse = [number,string]

 const goodRes: HTTPResponse = [200,'OK']
//  const goodRes2: HTTPResponse = ['OK',200]
// goodRes[0] = '300'

//! THE ONLY PROBLEM WITH TUPLES IS THAT IT DOESN'T PREVENT YOU PUSH or POP ELEMENTS 
//! AFTER IS IS CREATED
goodRes.push(200)
goodRes.pop()





