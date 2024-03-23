const { handler } = require( "./createUserHandler.js");

/*
  note username must be unique to database
*/
const event = {
  body: "{\"username\":\"BSUE\",\"email\":\"BSUE@gmail.com\",\"name\":\"Bobby Sue\"}"
};

(async () => {
  try {
  let response = await handler(event);
  console.log(response);
  } catch (error) {
    console.log(error);
}})();


//without iffe
/*
let myFun = async () => {
  try {
  let response = await handler(event);
  console.log(response);
  } catch (error) {
    console.log(error);
}};

myFun()
*/


