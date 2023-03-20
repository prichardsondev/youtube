class Song {
    constructor({ username, genre, id, stars}) {
      this.username = username;
      this.genre = genre;
      this.id = id;
      this.stars = stars;
    }
  
    key() {
      return {
        PK: `USER#${this.username}`,
        SK: `GENRE#${this.genre}#SONG#${this.id}`,
      };
    }
  
    toItem() {
      return {
        ...this.key(),
        Type: "SONG",
        Stars: `USER#${this.username}#STARS#${this.stars}`
      };
    }
  }
  
  const songFromItem = (attributes) => {
    return new Song({
      username: attributes.Username,
      genre: attributes.Genre,
      id: attributes.Id,
      start: attributes.Stars
    });
  };
  
  module.exports = { Song, songFromItem };