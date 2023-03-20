const stageUrl = "https://c4e5jgmf00.execute-api.us-east-1.amazonaws.com/dev";

function addUser() {

  const form = document.getElementById("userdata");
  const formData = new FormData(form);
  let name = formData.get('name');
  let email = formData.get('email');
  let username = formData.get('username');

  //"{\"username\":\"ALYTAR\",\"email\":\"alytar@gmail.com\",\"name\":\"Abigail Lytar\"}"
  fetch(`${stageUrl}/user`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username:username,
      email:email,
      name:name
    })
  })
    .then(function (data) {
      console.log('Request success: ', data);
    })
    .catch(function (error) {
      console.log('Request failure: ', error);
    });

}

function addSong() {
  const form = document.getElementById("songdata");
  const formData = new FormData(form);
  let user = formData.get('user');
  let songid = formData.get('songid');
  let genre = formData.get('genre');
  let stars = formData.get('stars');

  //"{\"username\":\"PRICHARDSON\",\"genre\":\"FOO\",\"id\":\"qemWRToNYJY\",\"stars\":5}",
  fetch(`${stageUrl}/song`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username:user,
      genre:genre,
      id:songid,
      stars,stars
    })
  })
    .then(function (data) {
      console.log('Request success: ', data);
    })
    .catch(function (error) {
      console.log('Request failure: ', error);
    });

}

function getPlaylist() {
  const form = document.getElementById("playlistdata");
  const formData = new FormData(form);
  let user = formData.get('user');;
  let genre = formData.get('genre');
  let stars = formData.get('stars');

  let url = `${stageUrl}/${user}/${genre}/${stars}`;

  console.log(url);

  fetch(url)
    .then(response => response.json())
    .then(data => { 
      window.open(data.playlistEntity); 
      console.log(data) 
    });
}


