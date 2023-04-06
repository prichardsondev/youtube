import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { fromIni } from "@aws-sdk/credential-providers";
const ddbClient = new DynamoDBClient({
    credentials: fromIni({ profile: PROFILE }),
    region:"us-east-1"
});
export { ddbClient };