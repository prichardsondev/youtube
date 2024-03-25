
import { createUserData } from "./createUserData.mjs";
import { User } from "./createUserEntitly.mjs";
import { response } from "./handler_response.mjs";

const handler = async (event) => {

  
  let {username, email, name} = JSON.parse(event.body);
  const user = new User({
    username,
    email,
    name
  });

  try {
    let {error} = await createUserData(user);
    return response(error ? 400 : 201, JSON.stringify(user.toItem()));
  } catch (error) {
    //console.log('handler ', error);
    return response(error.$metadata?.httpStatusCode || 500, { message: error.message });
  }
};

export { handler };