const {AWS,tablename} = require("./helper/credentials");

const dynamodb = new AWS.DynamoDB.DocumentClient();

const createUserData = async (user) => {
  let params = {
    Item: user.toItem(),
    TableName: tablename,
    ConditionExpression: "attribute_not_exists(PK)"
  };

  try {
    return await dynamodb.put(params).promise();
  } catch (error) {
    return error;
  }
};

module.exports = {
  createUserData,
};