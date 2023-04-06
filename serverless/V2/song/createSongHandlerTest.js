const { handler } = require("./createSongHandler");

const event = {
  body: "{\"username\":\"JRICHARDSON\",\"genre\":\"COUNTRY\",\"id\":\"DQYNM6SjD_o\",\"stars\":5}"
};

(async () => {
  try {
  let response = await handler(event);
  console.log(response);
  } catch (error) {
    console.log(error);
}})();




