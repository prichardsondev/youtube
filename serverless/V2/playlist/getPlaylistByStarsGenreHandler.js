const { getPlaylist } = require("./getPlaylistByStarsGenreData");
const { Playlist, generatePlaylist } = require("./getPlaylistByStarsGenreEntity");
const { response } = require("./helper/handler_response");

const handler = async (event) => {
  let {genre,stars,user} = event.pathParameters;
  const playlistEntity = new Playlist({
    username: user,
    genre: genre,
    stars: stars
  });

  console.log(playlistEntity);

  try {
    let items = await getPlaylist(playlistEntity);
    console.log(items);
    let playlist = {playlistEntity:generatePlaylist(items)}
    console.log(playlist)
    return response(200, playlist);
  } catch (error) {
    console.log(error);
    return response(400, { message: error });
  }
};

module.exports = { handler };