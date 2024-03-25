import { handler } from "./createUserHandler.mjs";

/*
  note username must be unique to database
*/
const event = {
  body: "{\"username\":\"SBRIDGEWELL22\",\"email\":\"SBRIDGEWELL@gmail.com\",\"name\":\"Sophie Morris Bridgewell\"}"
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


