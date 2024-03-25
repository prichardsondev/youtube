import { table, region } from './config.mjs';;

import { unmarshall } from "@aws-sdk/util-dynamodb";

import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb";

const getPlaylist = async (playlist) => {

  const client = new DynamoDBClient({ region });

  const params = {
    TableName: table,
    IndexName: "GSI1", // Specify the global secondary index name
    KeyConditionExpression: "#DDB_Stars = :pkey and begins_with(#DDB_SK, :skey)",
    ExpressionAttributeValues: {
      ":pkey": { S: playlist.toItem().PK },
      ":skey": { S: playlist.toItem().SK }
    },
    ExpressionAttributeNames: {
      "#DDB_Stars": "Stars",
      "#DDB_SK": "SK"
    },
    ScanIndexForward: true,
    ProjectionExpression: "SK",
    Limit: 100
  };

  try {
    const data = await client.send(new QueryCommand(params));
    return { "data": data.Items.map(item => unmarshall(item)) };
  } catch (error) {
    return error;
  }
};

export { getPlaylist };