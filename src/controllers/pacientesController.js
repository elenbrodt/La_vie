const { Pacientes } = require("../models");

const pacientesController = {
  async listarTodosPacientes(req, res) {
    try {
      const listaDeTodosPacientes = await Pacientes.findAll();

      res.status(200).json(listaDeTodosPacientes);
    } catch (error) {
      return res.status(500);
    }
  },
  async listarUmPaciente(req, res) {
    try {
      const { id } = req.params;

      const umPaciente = await Pacientes.findOne({
        where: {
          paciente_id: id,
        },
      });
      if (umPaciente === null) {
        res.status(404).json("ID não encontrado");
      } else {
        res.status(200).json(umPaciente);
      }
    } catch (error) {
      console.log(error);
    }
  },

  async criarPaciente(req, res) {
    try {
      const { nome, email, idade } = req.body;
      const newIdade = new Date(req.body.idade);
      const novoPaciente = await Pacientes.create({
        nome,
        email,
        idade: newIdade,
      });
      res.status(201).json(novoPaciente);
    } catch (err) {
      res.status(400).json("Houve algum problema na requisição");
    }
  },

  async atualizarPaciente(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, idade } = req.body;
      const newIdade = new Date(req.body.idade);

      if (!id) return res.status(400).json("ID não enviado");

      const pacienteAtualizado = await Pacientes.update(
        {
          nome,
          email,
          idade: newIdade,
        },
        {
          where: {
            paciente_id: id,
          },
        }
      );
      const umPaciente = await Pacientes.findOne({
        where: {
          paciente_id: id,
        },
      });
      if (umPaciente === null) {
        res.status(404).json("ID não encontrado");
      } else {
        res.status(200).json(umPaciente);
      }
    } catch (err) {
      res.status(400).json("Há um problema na requisição");
    }
  },
  async deletarPaciente(req, res) {
    try {
      const { id } = req.params;
      const umPaciente = await Pacientes.findOne({
        where: {
          paciente_id: id,
        },
      });
      const deletandoPaciente = await Pacientes.destroy({
        where: {
          paciente_id: id,
        },
      });
      if (umPaciente === null) {
        res.status(404).json("ID não encontrado");
      } else {
        res.status(200).json("ID deletado");
      }
    } catch (error) {
      res.console.log(error);
    }
  },
};

module.exports = pacientesController;
