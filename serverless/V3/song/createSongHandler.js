const { createSongData } = require("./createSongData");
const { Song } = require("./createSongEntity");
const { response } = require("../helper/handler_response");

const handler = async (event) => {
  let {username,genre,id,stars} = JSON.parse(event.body);
  const song = new Song({
    username,
    genre,
    id,
    stars
  });

  try {
    let {error} = await createSongData(song);
    console.log('error ...........', error);
    return response(error ? 500 : 201, JSON.stringify(song.toItem()));
  } catch (error) {
    return response(error.$metadata?.httpStatusCode || 500, { message: error.message });;
  }
};

module.exports = { handler };
