//route app request to controller
"use strict";

const { controller } = require("./controller");

module.exports = (app) => {
  app.route("/about").get(controller.about);
  app.route("/playlist").get(controller.getPlaylist);
  app.route("/playlist").post(controller.putPlaylist);
};
