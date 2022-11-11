"use strict";
//* In operator narrowing
function getRuntime(media) {
    //* typeof media  won't work because we always get object
    if ("numEpisodes" in media) {
        //* WE use in media
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
const movieRuntime = getRuntime({ title: "Amadeus", duration: 140 });
const seriesRuntime = getRuntime({ title: "Amadeus", numEpisodes: 20, episodeDuration: 30 });
