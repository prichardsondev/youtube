//server - file we start
//app->router->controller->service->db

const express = require("express");
const path = require("path");
const routes = require("./router");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

routes(app);

app.post("/", (req, res) => {
  console.log(req.body);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(3000, () => console.log("Listening on http://localhost:3000/"));
