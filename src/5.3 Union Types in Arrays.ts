//* Array Union Types

const nums: number[] = [];

let stuff: (number | string)[] = []; //! Array of type: Number or String
let stuff2: number | string[] = []; //! Single number or Array of string
let stuff3: number[] | string[] = []; //! Array of numbers or Array of strings

stuff = [1, 2, 3, "4", "5"];
stuff2 = 4;

stuff3 = [1, 2, 3, 4, 5];
stuff3 = ["string", "string", "string"];
// stuff3 = [1,2,3,4,5,'string'] error
 
