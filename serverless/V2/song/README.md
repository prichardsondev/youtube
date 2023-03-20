### Note this grouping of files is to make it simple to push to a lambda


- createSongHandler.js
  - handle request from api
  - create song [createSongEntity.js] from body of request
  - store data [createSongData.js]
  - returns response

#### run local test with createSongHandlerTest.js [don't push this file to lambda]
#### API Gateway will eventually be our API
<br>
#### PUT method body format (incoming api body)

```json
body: {
  username: "PRICHARDSON",
  genre: "DYNAMODB",
  id: "nqvlDgnNhPY",
  stars: 5
}
```

#### DynamoDB format (write to dynamo)
```json
  {
    "SK": "USER#PRICHARDSON#GENRE#DYNAMODB#SONG#nqvlDgnNhPY",
    "PK": "USER#PRICHARDSON",
    "Stars": "USER#PRICHARDSON#STARS#5",
    "Type": "SONG"
  }
```


### Create Song lambda for dynamo table paul_youtubeplaylist
<br>

#### Webpack

https://www.antstack.io/blog/nodejs-lambda-bundling-tree-shaking-webpack/

Uses webpack to package the following files into a single file <br/>
./dist/index/index.js. <br/>

Note: no node_modules are necessary to include in webpack -<br/>
aws-sdk is listed as external in webpack.config.js as aws has a copy -)

- createSongEntity.js
- createSongData.js
- createSongHandler.js
- handler_response.js

#### Run the following commands

- npm i <br/>
- npm run bundle <br/>

#### Use either method after creating a lambda

- upload ./dist/index.zip
- copy and paste ./dist/index/index.js into a lambda

  