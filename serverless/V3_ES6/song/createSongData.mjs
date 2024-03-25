import { table, profile, region, ssoprofile, local} from '../config.mjs';

import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

import { credentialprovider } from '../helper/credentialprovider.mjs';

const createSongData = async (song) => {
  try {

      let credentials = await credentialprovider(ssoprofile, local, profile);

      const client = new DynamoDBClient({ region, credentials });

      const docClient = DynamoDBDocumentClient.from(client);

      const command = new PutCommand({
        Item: song.toItem(),
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
  createSongData,
};