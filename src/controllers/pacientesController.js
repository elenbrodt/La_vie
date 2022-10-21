const { Pacientes } = require("../models");
const ERRORS = require("../constants/errors");

const pacientesController = {
  async listarTodosPacientes(req, res, next) {
    try {
      const listaDeTodosPacientes = await Pacientes.findAll();
      res.status(200).json(listaDeTodosPacientes);
    } catch (error) {
      next(error)
    }
  },
  async listarUmPaciente(req, res, next) {
    try {
      const { id } = req.params;

      const umPaciente = await Pacientes.findOne({
        where: {
          paciente_id: id,
        },
      });
      if (umPaciente === null) {
        res.status(404).json(ERRORS.ID_NOT_FOUND);
      } else {
        res.status(200).json(umPaciente);
      }
    } catch (error) {
        next(error)
    }
  },

  async criarPaciente(req, res, next) {
    try {
      const { nome, email, idade } = req.body;
      
      const novoPaciente = await Pacientes.create({
        nome,
        email,
        idade,
      });
      res.status(201).json(novoPaciente);
    } catch (error) {
      next(error)
    }
  },

  async atualizarPaciente(req, res, next) {
    try {
      const { id } = req.params;
      const { nome, email, idade } = req.body;

      const valid_paciente = await Pacientes.findByPk(id);

      if (!valid_paciente) {
        return res.status(400).json(ERRORS.ID_NOT_FOUND)   
      }

      const pacienteAtualizado = await Pacientes.update(
        {
          nome,
          email,
          idade,
        },
        {
          where: {
            paciente_id: id,
          },
        }
      );
   
      return res.status(200).json(valid_paciente);

    } catch (error) {
      next(error)
    }
  },
  async deletarPaciente(req, res, next) {
    try {
      const { id } = req.params;
      
      const deletandoPaciente = await Pacientes.destroy({
        where: {
          paciente_id: id,
        },
      });
      if (deletandoPaciente === 0) {
        res.status(404).json(ERRORS.ID_NOT_FOUND);
      } else {
        res.sendStatus(204);
      }
    } catch (error) {     
      next(error);
    }
  }
}


module.exports = pacientesController;
