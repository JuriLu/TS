//* Basics of class

/*
class Player2 {                //* Class creation
  score = 0;                  //* Class Fields
  numLives = 0;
  first: string ;              //! Method 1 of declaring properties and initializing in constructor
  last: string
//* #field = 'Private property in JS'

  constructor(                //* Constructor Automatically called when class in instantiated wtih params
    first: string,            //* class property
    last: string
  ) {
     this.first = first
     this.last = last
  }

  taunt() {}                  //* Class Method
}
*/
//! Method 2 ShortHand declaration
class Player {
  //? score: number = 0
  private readonly _id: number; //* Readonly modifier   By convention , private properties are signed with _
  protected _score: number; //* Protected modifier  Makes private properties available in other classes

  //* Parameter declaration shorthand
  constructor(public first: string, public last: string) {   //* Public and private modifiers are TS exclusive only
    this._id = Math.round(Math.random() * 1000);
    this._score = this._id;
  }

  private secretMethod() {
    console.log("Secret Method");
  }

  //* Getter
  get fullname(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  //*Setter

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative");
    }
    this._score = newScore;
  }
}


//* Class Extention
class SuperPlayer extends Player {
  public isAdmin: boolean = true;

  constructor(first: string, last: string, public powers: string[]) { //* constructor calls for the class
    super(first, last);                                               //* super calls for superclass
  }

  maxScore() {
    this._score = 999999;
  }
}

const player1 = new Player("blue", "steel");
console.log(player1);
// player1.score = 'asdf'
// player1.secretMethod()

const superPlayer = new SuperPlayer("test", "test2",['','']);

// ! player1.fullname = 'afds'   WHEN YOU ASSIGN only getter not setter, the property automatically is set to readonly
