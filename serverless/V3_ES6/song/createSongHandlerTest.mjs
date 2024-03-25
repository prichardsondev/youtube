import { handler } from "./createSongHandler.mjs";

const event = {
  body: "{\"username\":\"SBRIDGEWELL17\",\"genre\":\"COUNTRY\",\"id\":\"123456\",\"stars\":5}"
};

(async () => {
  try {
  let response = await handler(event);
  console.log(response);
  } catch (error) {
    console.log(error);
}})();




