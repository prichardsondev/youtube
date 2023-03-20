const fs = require("fs");

const db = {
  write: async (id) => {
    try {
      console.log(`got ${id}`);
      fs.appendFile("youtube.txt", `\n${id}`, (e) =>
        e != null ? console.log(e) : null
      );
    } catch (err) {
      console.log(`db: ${err}`);
    }
  },
};

module.exports = {
  db,
};
