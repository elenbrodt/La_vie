

const express = require("express");
const db = require("./database");
const routes = require("./routes");

const app = express();

db.hasConection();

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
