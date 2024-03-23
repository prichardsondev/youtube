const { handler } = require("./createSongHandler");

const event = {
  body: "{\"username\":\"SBRIDGEWELL\",\"genre\":\"COUNTRY\",\"id\":\"Fr7oYjnt3bM\",\"stars\":5}"
};

(async () => {
  try {
  let response = await handler(event);
  console.log(response);
  } catch (error) {
    console.log(error);
}})();




