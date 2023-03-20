const { handler } = require("./createUserHandler");

/*
  note username must be unique to database
*/
const event = {
  body: "{\"username\":\"ALYTAR\",\"email\":\"alytar@gmail.com\",\"name\":\"Abigail Lytar\"}"
};

(async () => {
  try {
  console.log('bunnies');
  let response = await handler(event);
  console.log(response);
  } catch (error) {
    console.log(error);
}})();


