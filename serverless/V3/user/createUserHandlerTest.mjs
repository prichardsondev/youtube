import { handler } from "./createUserHandler.mjs";

/*
  note username must be unique to database
*/
const event = {
  body: "{\"username\":\"MVICELLIO.4\",\"email\":\"mvicellio@gmail.com\",\"name\":\"Marlowe Vicellio\"}"
};

handler(event);


