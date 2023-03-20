const {AWS,tablename} = require("./helper/credentials");

const dynamodb = new AWS.DynamoDB.DocumentClient();

const createSongData = async (song) => {
  let params = {
    Item: song.toItem(),
    TableName: tablename,
    ConditionExpression: "attribute_not_exists(PK)"
  };

  console.log(params);

  try {
    return await dynamodb.put(params).promise();
  } catch (error) {
    return error;
  }
};

module.exports = {
  createSongData,
};