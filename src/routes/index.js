const express = require("express");
const atendimentosController = require('../controllers/atendimentosController');
const psicologosController = require("../controllers/psicologosController");
const validacaoPsicologos = require("../validations/psicologos/create");
const validacaoPacientes = require("../validations/pacientes/create")
const pacientesController = require("../controllers/pacientesController");
const authController = require("../controllers/authController");
const authLoginValidation = require("../validations/auth/login")
const auth = require("../middlewares/auth")
const validacaoAtendimentos = require("../validations/atendimentos/create");
const dashboardController = require("../controllers/dashboardController");
const routes = express.Router();

routes.get("/atendimentos", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", atendimentosController.listarAtendimento);
routes.post("/atendimentos", validacaoAtendimentos, auth,  atendimentosController.criarAtendimento);
routes.get("/psicologos", psicologosController.listarTodosPsicologos);
routes.get("/psicologos/:id", psicologosController.listarUmPsicologo);
routes.post("/psicologos", validacaoPsicologos, psicologosController.criarPsicologo);
routes.put("/psicologos/:id", validacaoPsicologos, psicologosController.atualizarPsicologo);
routes.delete("/psicologos/:id", psicologosController.deletarPsicologo);
routes.get("/pacientes", pacientesController.listarTodosPacientes);
routes.get("/pacientes/:id", pacientesController.listarUmPaciente);
routes.post("/pacientes", validacaoPacientes, pacientesController.criarPaciente);
routes.put("/pacientes/:id", validacaoPacientes, pacientesController.atualizarPaciente);
routes.delete("/pacientes/:id", pacientesController.deletarPaciente);


routes.post("/login",authLoginValidation, authController.login)


routes.get("/dashboard/numero-paciente",dashboardController.countPacientes);
routes.get("/dashboard/numero-psicologo",dashboardController.countPsicologos);
routes.get("/dashboard/numero-atendimentos",dashboardController.countAtendimentos);
routes.get("/dashboard/media-atendimentos",dashboardController.averageAtendimentos);
module.exports = routes;