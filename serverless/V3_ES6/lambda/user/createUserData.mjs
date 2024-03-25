import { table, region } from './config.mjs';

import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const createUserData = async (user) => {
  try {

      const client = new DynamoDBClient({ region });

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

export {
  createUserData,
};