const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
  endpoint: "http://dynamodb.us-east-1.amazonaws.com",
  credentials: new AWS.SharedIniFileCredentials({
    profile: "training",
  }),
});

module.exports = {AWS, tablename:"prichardson_youtube"};
