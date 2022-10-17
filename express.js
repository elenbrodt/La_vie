const express = require("express");
const pacientesController = require("../database/pacientesController");
const routes = express.Router();

routes.get("/pacientes", pacientesController.listarPacientes);
routes.post("/pacientes/criar", pacientesController.cadastrarPacientes);

module.exports = routes;
