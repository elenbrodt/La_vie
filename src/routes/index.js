const express = require("express");
const atendimentoController = require('../controllers/atendimentoController');
const routes = express.Router();

routes.get("/atendimentos", atendimentoController.listarAtendimentos);
routes.get("/atendimentos/:id", atendimentoController.listarAtendimento);
routes.post("/atendimentos/criar", atendimentoController.criarAtendimento);

module.exports = routes;