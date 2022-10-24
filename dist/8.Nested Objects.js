"use strict";
// * Nested Objects
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log(`${song.title}, ${song.artist}`);
}
const mySong = {
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
const point3d = { x: 1, y: 2 };
