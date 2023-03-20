const { handler } = require("./getPlaylistByStarsGenreHandler");

//Path parameters / .../user/genre/stars - point to resource
//access from api gateway as https://.../PRICHARDSON/DYNAMODB/5

const event = {
  pathParameters: {
    user: "PRICHARDSON",
    genre: "DYNAMODB",
    stars: 5
  },
};

handler(event);