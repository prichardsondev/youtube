const stageUrl = "yourstageurl";

function getToken(){
  let id_token = new URLSearchParams(window.location.hash).get('#id_token');
  return id_token
}

function addUser() {
  const form = document.getElementById("userdata");
  const formData = new FormData(form);
  let name = formData.get('name');
  let email = formData.get('email');
  let username = formData.get('username');

  //"{\"username\":\"ALYTAR\",\"email\":\"alytar@gmail.com\",\"name\":\"Abigail Lytar\"}"
  fetch(`${stageUrl}/users`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      name: name
    })
  })
    .then(function (data) {
      console.log('Request success: ', data);
    })
    .catch(function (error) {
      console.log('Request failure: ', error);
    });
}

function addSong () {
  const form = document.getElementById("songdata");
  const formData = new FormData(form);
  let user = formData.get('user');
  let songid = formData.get('songid');
  let genre = formData.get('genre');
  let stars = formData.get('stars');

  //"{\"username\":\"PRICHARDSON\",\"genre\":\"FOO\",\"id\":\"qemWRToNYJY\",\"stars\":5}",
  fetch(`${stageUrl}/songs`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: user,
      genre: genre,
      id: songid,
      stars, stars
    })
  })
    .then(function (data) {
      console.log('Request success: ', data);
    })
    .catch(function (error) {
      console.log('Request failure: ', error);
    });

}

function  getPlaylist () {
  console.log('playlist');
  const form = document.getElementById("playlistdata");
  const formData = new FormData(form);
  let user = formData.get('user');;
  let genre = formData.get('genre');
  let stars = formData.get('stars');
  let url = `${stageUrl}/playlist/${user}/${genre}/${stars}`;
  console.log(url);

  let headers = new Headers();
  headers.append('Authorization', `${getToken()}`);

  var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow',
    mode:'cors'
  };

  fetch(`${stageUrl}/playlist/${user}/${genre}/${stars}`,requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data.playlist);
      let formed = JSON.parse(data);
      window.open(formed.playlistEntity);
      console.log(data)
    });
}