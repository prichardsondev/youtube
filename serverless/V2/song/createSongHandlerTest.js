const { handler } = require("./createSongHandler");

const event = {
  body: "{\"username\":\"PRICHARDSON\",\"genre\":\"BA\",\"id\":\"qemWRToNYJY\",\"stars\":5}"
};

handler(event);




