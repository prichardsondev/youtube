const AWS = require("aws-sdk");


AWS.config.update({
  region: "us-east-1",
  endpoint: "http://dynamodb.us-east-1.amazonaws.com",
  //uncomment below for local use
  credentials: new AWS.SharedIniFileCredentials({
    profile: "training",
  }),
  //uncomment above for local use
});

module.exports = {AWS, tablename:"prichardson_youtube"};
