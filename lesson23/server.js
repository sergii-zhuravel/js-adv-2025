const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

let users = [
  { id: 1, name: "Viktor", age: 45 },
  { id: 2, name: "Anna", age: 35 },
  { id: 3, name: "John", age: 46 },
];

app.get("/", (req, resp) => {
  resp.send("<strong>Hello world!</strong>");
});

app.get("/users", (req, resp) => {
  //   resp.setHeader("Content-Type", "application/json");
  //   resp.end(JSON.stringify(users));
  resp.json(users);
});

app.get("/users/:id", (req, resp) => {
  const user = users.find((user) => user.id === Number(req.params.id));
  resp.json(user);
});

app.delete("/users/:id", (req, resp) => {
  users = users.filter((user) => user.id !== Number(req.params.id));
  resp.json(users);
});

app.put("/users/:id", (req, resp) => {
  const id = +req.params.id;

  const newUser = { ...req.body, id };

  users = users.map((user) => (user.id === id ? newUser : user));

  resp.json(users);
});

app.post("/users", (req, resp) => {
  const newUser = { ...req.body, id: 4 };

  users.push(newUser);

  resp.json(users);
});

app.listen(port, () => {
  console.log("App is listening on port: ", port);
});
