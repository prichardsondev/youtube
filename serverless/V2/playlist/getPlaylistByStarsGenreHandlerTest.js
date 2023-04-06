const { handler } = require("./getPlaylistByStarsGenreHandler");

//Path parameters / .../user/genre/stars - point to resource
//call api gateway as https://stageurl/PRICHARDSON/COUNTRY/5

const event = {
  pathParameters: {
    user: "JRICHARDSON",
    genre: "COUNTRY",
    stars: 5
  },
};

(async () => {
  try {
  let response = await handler(event);
  console.log(response);
  } catch (error) {
    console.log(error);
}})();