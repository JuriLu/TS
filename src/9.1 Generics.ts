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
     return item
}

function strinIdentity(item: string): string {
     return item
}

function booleanIdentity(item: boolean): boolean {
     return item
}

function identity<T>(item: T): T{
     return item
}


identity<string>('test')
identity<number>(3)
identity<boolean>(true)