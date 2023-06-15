const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
  endpoint: "http://dynamodb.us-east-1.amazonaws.com",
  credentials: new AWS.SharedIniFileCredentials({
    profile: "sandbox",
  }),
});

module.exports = {AWS, tablename:"youtube"};
