import { createSongData } from "./createSongData.mjs";
import { Song } from "./createSongEntity.mjs";
import { response } from "./handler_response.mjs";

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
    return response(error ? 500 : 201, JSON.stringify(song.toItem()));
  } catch (error) {
    return response(error.$metadata?.httpStatusCode || 500, { message: error.message });;
  }
};

export { handler };
