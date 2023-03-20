const { createUserData } = require("./createUserData");
const { User } = require("./createUserEntitly");
const { response } = require("./helper/handler_response");

const handler = async (event) => {

  let {username, email, name} = JSON.parse(event.body);
  const user = new User({
    username,
    email,
    name
  });

  let {error} = await createUserData(user);
  return response(error ? 500 : 200, JSON.stringify(user.toItem()));
};

module.exports = { handler };