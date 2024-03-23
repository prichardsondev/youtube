
const { createUserData } = require( "./createUserData.js");
const { User } = require( "./createUserEntitly.js");
const { response } = require( "./helper/handler_response.js");

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

module.exports = { handler };