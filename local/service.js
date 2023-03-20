//preform logic -> send to db
//load file system module into global cache
var fs = module.require("fs");

const { db } = require("./db");

const service = {
  putPlaylist: async (id) => {
    try {
      db.write(id);
    } catch (err) {}
  },
  getPlaylist: async () => {
    let output = "http://www.youtube.com/watch_videos?video_ids=";
    var data = fs.readFileSync("youtube.txt", "utf8");
    data
      .split(/\r?\n/)
      .sort(function (a, b) {
        return 0.5 - Math.random();
      })
      .forEach((s, i) => (output += i === 0 ? `${s}` : `,${s}`));
    return output;
  },
};

module.exports = {
  service,
};
