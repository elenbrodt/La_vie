const express = require("express");
const atendimentoController = require('../controllers/atendimentoController');
const routes = express.Router();

routes.get("/atendimentos/lista", atendimentoController.listarAtendimentos);
routes.post("/atendimentos/criar", atendimentoController.criarAtendimento);

module.exports = routes;