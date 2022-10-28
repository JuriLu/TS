// * Nested Objects

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song) {
  console.log(`${song.title}, ${song.artist}`);
}

const mySong: Song = {
  title: "Thirri krejt shoqet",
  artist: "PINT & Keepman",
  numStreams: 1000000,
  credits: {
    producer: "Mc Kresha",
    writer: "Lyrical Son",
  },
  // credits: 'producer: MC kresha'
};

console.log(calculatePayout(mySong));
printSong(mySong);

//* Optional Properties

type Point3D = {
  x: number;
  y: number;
  z?: number;
};

const point3d: Point3D = { x: 1, y: 2 };
