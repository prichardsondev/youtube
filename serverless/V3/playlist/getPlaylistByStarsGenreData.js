const {table,profile,region, ssoprofile} = require('./config.js');
console.log(table,profile,region, ssoprofile);

const { unmarshall } = require("@aws-sdk/util-dynamodb");

const provider = ssoprofile=="yes" ? require("@aws-sdk/credential-provider-sso") :
  require ( "@aws-sdk/credential-provider-ini");

const { DynamoDBClient,QueryCommand } = require("@aws-sdk/client-dynamodb");

const getPlaylist = async (playlist) => {
  const credentials = ssoprofile=="yes" ? provider.fromSSO({ profile }):provider.fromIni({profile});

  const client = new DynamoDBClient({ region, credentials });

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

module.exports = { getPlaylist };