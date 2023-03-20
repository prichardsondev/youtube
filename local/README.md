### Youtube playlist builder service

GET method generates playlist url from youtube.txt<br/>
POST method adds song id to youtube.txt<br/>

Structure app.js->route.js->controller.js->service.js->db.js <br/>
Contrived file names to make it easy to follow.<br/>
Note these would be folders of same name in actual app

##### To run:

open terminal ./local

```shell
npm install
```

```shell
npm start
```

browse to http://localhost:3000/

GET <br/>
http://localhost:3000/playlist

Note: returned playlist url is randomized

POST <br/>
http://localhost:3000/playlist <br/>
To add this song: www.youtube.com/watch?v=mg7netw1JuM <br/>
Post this body using postman or curl

```javascript
{
"id":"mg7netw1JuM"
}
```
