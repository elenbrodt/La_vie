const { Psicologos, Atendimentos, Pacientes } = require("../models");

const atendimentosController = {
  async listarAtendimentos(req, res, next) {
    try {
      const listaAtendimentos = await Atendimentos.findAll({
        include: [
          { model: Psicologos, attributes: ["psicologo_id", "nome", "email"] },
          { model: Pacientes },
        ],
      });

      res.status(200).json(listaAtendimentos);

    } catch (error) {
      next(error);
    }
  },
  async listarAtendimento(req, res, next) {
    try {
      const { id } = req.params;

      const atendimentoId = await Atendimentos.findOne({
        where: {
          atendimento_id: id,
        },
      });

      if (atendimentoId === null) {
        return res.status(404).json("ID não encontrado.");
      }

      res.status(200).json(atendimentoId);

    } catch (error) {
      next(error);
    }
  },
  async criarAtendimento(req, res, next) {
    try {
      console.log(req.auth);
      const { paciente_id, data_atendimento, observacoes } = req.body;
      const login_id = req.auth.psicologo_id;
      const atendimentoCriado = await Atendimentos.create({
        psicologo_id: login_id,
        paciente_id: paciente_id,
        data_atendimento: data_atendimento,
        observacoes: observacoes,
      });

      res.status(201).json(atendimentoCriado);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = atendimentosController;
