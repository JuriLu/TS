//* Exercise

//* Create empty array
const ages: number[] = [];

/* Create an array variable called gameBoard that starts
 as an empty array.
It should be typed to hold a 2 dimensional array of
*/

const gameBoard: string[][] = [];

// Create product type with name:string and price:number

type Product = {
  name: string;
  price: number;
};

// write a function getTotal that accepts an array of Product Array

function getTotal(products: Product[]): number {
  let total = 0;
  for (let product of products) {
    total += product.price;
  }
  return total;
}
