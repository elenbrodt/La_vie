const express = require("express");
const atendimentoController = require('../controllers/atendimentoController');
const psicologosController = require("../controllers/psicologosController")
const validacaoPsicologos = require("../validations/psicologos/create")
const routes = express.Router();

routes.get("/atendimentos", atendimentoController.listarAtendimentos);
routes.get("/atendimentos/:id", atendimentoController.listarAtendimento);
routes.post("/atendimentos/criar", atendimentoController.criarAtendimento);
routes.get("/psicologos", psicologosController.listarTodosPsicologos);
routes.get("/psicologos/:id", psicologosController.listarUmPsicologo);
routes.post("/psicologos", validacaoPsicologos, psicologosController.criarPsicologo);
routes.put("/psicologos/:id", validacaoPsicologos, psicologosController.atualizarPsicologo);
routes.delete("/psicologos/:id", psicologosController.deletarPsicologo);

module.exports = routes;