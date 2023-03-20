class Playlist {
  constructor({ username, genre, stars}) {
    this.username = username;
    this.genre = genre;
    this.stars = stars;
  }

  //GSI1
  key() {
    return {
      PK: `USER#${this.username}#STARS#${this.stars}`,
      SK: `GENRE#${this.genre}`,
    };
  }

  toItem() {
    return {
      ...this.key(),
    };
  }
}

const generatePlaylist = (data) => {

 
  let output = "http://www.youtube.com/watch_videos?video_ids=";

  //randomly sort the array - randomish anyway.
  data.sort((a, b) => 0.5 - Math.random());

  //iterate data - add each song to end of output string
  for (let i = 0; i < data.length; i++) {
    let arr = data[i].SK.split("#");
    if (i === 0) {
      output += arr[arr.length-1];
    } else {
      output += "," + arr[arr.length-1];
    }
  };

  return(output);
}

module.exports = { Playlist, generatePlaylist };