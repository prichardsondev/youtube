import { createUserData } from "./createUserData.mjs";
import { User } from "./createUserEntitly.mjs";
import { response } from "./helper/handler_response.mjs";

export const handler = async (event) => {

  
  let {username, email, name} = JSON.parse(event.body);
  const user = new User({
    username,
    email,
    name
  });

  try {
    await createUserData(user);
    return response(200, user.toItem());
  } catch (error) {
    console.log(error);
    return response(400, { message: error });
  }
};