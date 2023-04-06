const { getPlaylist } = require("./getPlaylistByStarsGenreData");
const { Playlist, generatePlaylist } = require("./getPlaylistByStarsGenreEntity");
const { response } = require("../helper/handler_response");

const handler = async (event) => {
  let {genre,stars,user} = event.pathParameters;
  const playlistEntity = new Playlist({
    username: user,
    genre: genre,
    stars: stars
  });

  //console.log(playlistEntity);

  try {
    let {error, data} = await getPlaylist(playlistEntity);
    let playlist = {playlistEntity:generatePlaylist(data)}
    return response(error ? 500 : 200, JSON.stringify(playlist));
  } catch (error) {
    console.log(error);
    return response(400, { message: error });
  }
};

module.exports = { handler };