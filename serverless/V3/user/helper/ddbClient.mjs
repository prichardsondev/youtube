// Create service client module using ES6 syntax.
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
// import { fromIni } from "@aws-sdk/credential-providers";
// Set the AWS Region.
const REGION = "us-east-1";
//const PROFILE = "idexx";
// Create an Amazon DynamoDB service client object.
const ddbClient = new DynamoDBClient({
    // credentials: fromIni({ profile: PROFILE }),
    region:REGION
});
export { ddbClient };