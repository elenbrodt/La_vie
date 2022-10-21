const express = require("express");
const paramID = require("../validations/param_id");
const atendimentosController = require('../controllers/atendimentosController');
const validacaoAtendimentos = require("../validations/atendimentos/create");
const psicologosController = require("../controllers/psicologosController");
const validacaoPsicologos = require("../validations/psicologos/create");
const putPsicologos = require("../validations/psicologos/update");
const pacientesController = require("../controllers/pacientesController");
const validacaoPacientes = require("../validations/pacientes/create")
const putPacientes = require("../validations/pacientes/update");
const authController = require("../controllers/authController");
const authLoginValidation = require("../validations/auth/login")
const auth = require("../middlewares/auth")
const dashboardController = require("../controllers/dashboardController");

const routes = express.Router();

routes.get("/atendimentos", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", paramID, atendimentosController.listarAtendimento);
routes.post("/atendimentos", validacaoAtendimentos, auth,  atendimentosController.criarAtendimento);

routes.get("/psicologos", psicologosController.listarTodosPsicologos);
routes.get("/psicologos/:id", paramID, psicologosController.listarUmPsicologo);
routes.post("/psicologos", validacaoPsicologos, psicologosController.criarPsicologo);
routes.put("/psicologos/:id", putPsicologos, psicologosController.atualizarPsicologo);
routes.delete("/psicologos/:id", paramID, psicologosController.deletarPsicologo);

routes.get("/pacientes", pacientesController.listarTodosPacientes);
routes.get("/pacientes/:id", paramID, pacientesController.listarUmPaciente);
routes.post("/pacientes", validacaoPacientes, pacientesController.criarPaciente);
routes.put("/pacientes/:id", putPacientes, pacientesController.atualizarPaciente);
routes.delete("/pacientes/:id", paramID, pacientesController.deletarPaciente);

routes.post("/login",authLoginValidation, authController.login)

routes.get("/dashboard/numero-pacientes",dashboardController.countPacientes);
routes.get("/dashboard/numero-psicologos",dashboardController.countPsicologos);
routes.get("/dashboard/numero-atendimentos",dashboardController.countAtendimentos);
routes.get("/dashboard/media-atendimentos",dashboardController.averageAtendimentos);

module.exports = routes;