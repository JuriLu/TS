//* In operator narrowing

interface MovieInn {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: MovieInn | TVShow) {
  //* typeof media  won't work because we always get object

  if ("numEpisodes" in media) {
    //* WE use in media
    return media.numEpisodes * media.episodeDuration;
  }
  return media.duration;
}

const movieRuntime = getRuntime({ title: "Amadeus", duration: 140 });
const seriesRuntime = getRuntime({ title: "Amadeus", numEpisodes: 20, episodeDuration: 30 });
