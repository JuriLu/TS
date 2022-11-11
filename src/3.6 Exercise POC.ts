type Movie = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldWide: number;
  };
};

const Dune = {
  title: "Dune",
  originalTitle: "Dune Part One",
  director: "Denis Villenueve",
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108364633,
    grossWorldWide: 66383990374,
  },
};

const Cats = {
  title: "Cats",
  director: "Tom Hooper",
  releaseYear: 2019,
  boxOffice: {
    budget: 950000000,
    grossUS: 270000000,
    grossWorldWide: 730000000,
  },
};

//! Object Destructuring
function getProfit(movie: Movie): number {
  const { grossWorldWide: GWW, budget } = movie.boxOffice;
  return GWW - budget;
}

console.log(getProfit(Dune));
