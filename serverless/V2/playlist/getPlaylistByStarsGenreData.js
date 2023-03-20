const {AWS,tablename} = require("./helper/credentials");
const {generatePlaylist} = require("./getPlaylistByStarsGenreEntity");

const dynamodb = new AWS.DynamoDB.DocumentClient();

const getPlaylist = async (playlist) => {
  let params = {
    "TableName": tablename,
    "IndexName": "GSI1",
    "KeyConditionExpression": "#DDB_Stars = :pkey and begins_with(#DDB_SK, :skey)",
    "ExpressionAttributeValues": {
    ":pkey": playlist.toItem().PK,
    ":skey": playlist.toItem().SK
    },
    "ExpressionAttributeNames": {
    "#DDB_Stars": "Stars",
    "#DDB_SK": "SK"
    },
    "ScanIndexForward": true,
    "ProjectionExpression":"SK",
    "Limit": 100
  };

  
  try {
    let data = await dynamodb.query(params).promise();
    console.log("...................", data);
    return(data.Items);
  } catch (error) {
    return error;
  }
};

module.exports = { getPlaylist };