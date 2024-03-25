import { getPlaylist } from "./getPlaylistByStarsGenreData.mjs";
import { Playlist, generatePlaylist } from "./getPlaylistByStarsGenreEntity.mjs";
import { response } from "../helper/handler_response.mjs";

const handler = async (event) => {
  let {genre,stars,user} = event.pathParameters;
  const playlistEntity = new Playlist({
    username: user,
    genre: genre,
    stars: stars
  });

  try {
    let {error, data} = await getPlaylist(playlistEntity);
    //quick hack for enpty array. add global error handler class
    if(data.length == 0) throw Error("playlist is empty");
    let playlist = {playlistEntity:generatePlaylist(data)};
    return response(error ? 500 : 200, JSON.stringify(playlist));
  } catch (error) {
    return response(error.$metadata?.httpStatusCode || 500, { message: error.message });
  }
};

export { handler };