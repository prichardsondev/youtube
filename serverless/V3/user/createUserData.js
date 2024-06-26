const {table,profile,region, ssoprofile} = require('./config.js');

console.log(table,profile,region, ssoprofile);

const { PutCommand, DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");

const provider = ssoprofile=="yes" ? require("@aws-sdk/credential-provider-sso") :
  require ( "@aws-sdk/credential-provider-ini");

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");

const createUserData = async (user) => {
  try {

      const credentials = ssoprofile=="yes" ? provider.fromSSO({ profile }):provider.fromIni({profile});

      const client = new DynamoDBClient({ region, credentials });

      const docClient = DynamoDBDocumentClient.from(client);

      const command = new PutCommand({
        Item: user.toItem(),
        TableName: table,
        ConditionExpression: "attribute_not_exists(PK)"
      });

      const response = await docClient.send(command);
      return response;
  } catch (error) {
      throw error;
  }
};

module.exports = {
  createUserData,
};