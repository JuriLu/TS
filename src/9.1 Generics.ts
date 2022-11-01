//* GENERICS

//* Function accept number or string and return number or string, but don't know which
// function doThing(thing: number | string): number | string {}

//* Custom Generics
const numss: number[] = [1, 2, 2];
const numsss: Array<number> = [4, 44, 423, 23, 234, 34, 2];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;

console.dir(inputEl);
inputEl.value = "Changed";

function numberIdentity(item: number): number {
  return item;
}

function strinIdentity(item: string): string {
  return item;
}

function booleanIdentity(item: boolean): boolean {
  return item;
}

function identity<T>(item: T): T {
  return item;
}

identity<string>("test");
identity<number>(3);
identity<boolean>(true);

//* Example
function getRandomElement<T>(list: T[]): T {
  const randId = Math.floor(Math.random() * list.length);
  return list[randId];
}

getRandomElement<string>(["a", "b", "c", "d"]);
getRandomElement<number>([1, 7, 25, 334, 656]);
getRandomElement([1, 4, 5, 7, 10]); //* Inferred type , ts knows that this generic type is number
//* There are times that we need to specify

// [4,5,6,7]
// [true,false,true]
// [{},{},{}]

//* Generic with multiple types & Constrain Types [extends object]
//* out of all types T and U have to be objects

function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  //* Automatically knows the return type
  return {
    ...obj1,
    ...obj2,
  };
}

const comboObj = merge({ x: "1", y: "2" }, { a: 1, b: 2 });
// const comboObj2 = merge({ x: "1", y: "2" }, 9);

interface Lengthy {
  length: number;
}

//! Must include extends Lengthy
function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

// printDoubleLength(8)
console.log(printDoubleLength("asdf;aksjdfo"));

//* GENERIC CLASSES

interface Music {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class Playlist<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const song = new Playlist<Song>();
const videos = new Playlist<Video>();

videos.add({ title: "Video", creator: "creator", resolution: "1440 px" });
