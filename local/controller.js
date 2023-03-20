//pull data from request -> validate -> send to service -> return response
//from service to view
const { service } = require("./service");

const controller = {
  about: (req, res) => {
    res.send("about ...");
  },
  putPlaylist: async (req, res) => {
    try {
      console.log(req);
      let id = req.body.id;

      if (id) {
        await service.putPlaylist(id);
        res.sendStatus(201);
      } else res.sendStatus(404);
    } catch (err) {
      console.log("controller putPlaylist...", err.message);
      res.sendStatus(500);
    }
  },
  getPlaylist: async (req, res) => {
    try {
      let playlist = await service.getPlaylist();
      res.send(playlist);
    } catch (err) {
      console.log("controller getPlaylist...", err.message);
      res.sendStatus(500);
    }
  },
};

module.exports = {
  controller,
};
