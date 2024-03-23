const { handler } = require("./createSongHandler");

const event = {
  body: "{\"username\":\"BSUE\",\"genre\":\"COUNTRY\",\"id\":\"DQYNM6SjD_o\",\"stars\":1}"
};

(async () => {
  try {
  let response = await handler(event);
  console.log(response);
  } catch (error) {
    console.log(error);
}})();




