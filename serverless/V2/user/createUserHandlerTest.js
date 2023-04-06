const { handler } = require("./createUserHandler");

/*
  note username must be unique to database
*/
const event = {
  body: "{\"username\":\"JRICHARDSON\",\"email\":\"JRICHARDSON@gmail.com\",\"name\":\"Jaime Richardson\"}"
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
