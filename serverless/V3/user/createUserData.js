const {table,profile,region, ssoprofile} = require('./config.js');
const { PutCommand, DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");
// const { fromSSO } = require("@aws-sdk/credential-provider-sso");
// const { fromIni } = require ( "@aws-sdk/credential-provider-ini");

const provider = ssoprofile=="yes" ? require("@aws-sdk/credential-provider-sso") :
  require ( "@aws-sdk/credential-provider-ini");

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");

const createUserData = async (user) => {
  try {

      //const credentials = profiletype=="sso"? fromSSO({ profile }):fromIni({profile});

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





// import { PutCommand } from "@aws-sdk/lib-dynamodb";
// import {ddbDocClient} from './helper/ddbDocClient.mjs'
// let tablename = "prichardson_youtube";

// export const createUserData = async (user) => {
//   let params = {
//     Item: user.toItem(),
//     TableName: tablename,
//     ConditionExpression: "attribute_not_exists(PK)"
//   };

//   try {
//     const data = await ddbDocClient.send(new PutCommand(params));
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };