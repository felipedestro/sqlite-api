const express = require("express");
const cors = require("cors");

const person = require("../src/controllers/person.controller");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/person", person.select);

app.post("/person", person.create);

app.put("/person/:id", person.update);

app.delete("/person/:id", person.erase);

app.listen("3000", () => {
  console.log("server open in door 3000");
});
