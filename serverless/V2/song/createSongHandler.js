const { createSongData } = require("./createSongData");
const { Song } = require("./createSongEntity");
const { response } = require("./helper/handler_response");

const handler = async (event) => {
  let {username,genre,id,stars} = JSON.parse(event.body);
  const song = new Song({
    username,
    genre,
    id,
    stars
  });

  try {
    await createSongData(song);
    return response(200, song.toItem());
  } catch (error) {
    console.log(error);
    return response(400, { message: error });
  }
};

module.exports = { handler };