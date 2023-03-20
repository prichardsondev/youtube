
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import {ddbDocClient} from './helper/ddbDocClient.mjs'
let tablename = "prichardson_youtube";

export const createUserData = async (user) => {
  let params = {
    Item: user.toItem(),
    TableName: tablename,
    ConditionExpression: "attribute_not_exists(PK)"
  };

  try {
    const data = await ddbDocClient.send(new PutCommand(params));
    return data;
  } catch (error) {
    console.log(error);
  }
};