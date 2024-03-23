const { handler } = require( "./createUserHandler.js");

/*
  note username must be unique to database
*/
const event = {
  body: "{\"username\":\"SBRIDGEWELL\",\"email\":\"SBRIDGEWELL@gmail.com\",\"name\":\"Sophie Morris Bridgewell\"}"
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


