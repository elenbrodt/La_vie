const { Psicologos } = require("../models");
const bcrypt = require("bcryptjs");

const psicologosController = {
  async listarTodosPsicologos(req, res, next) {
    try {
      const listaDeTodosPsicologos = await Psicologos.findAll();

      res.status(200).json(listaDeTodosPsicologos);
    } catch (error) {
      next(error);
    }
  },
  async listarUmPsicologo(req, res, next) {
    try {
      const { id } = req.params;
      const umPsicologo = await Psicologos.findOne({
        where: {
          psicologo_id: id,
        },
      });
      if (umPsicologo === null) {
        res.status(404).json("ID Não encontrado");
      } else {
        res.status(200).json(umPsicologo);
      }
    } catch (error) {
      next(error)
    }
  },
  async criarPsicologo(req, res, next) {
    try {
      const { nome, email, senha, apresentacao } = req.body;
      const newSenha = bcrypt.hashSync(senha, 10);
      const novoPsicologo = await Psicologos.create({
        nome,
        email,
        senha: newSenha,
        apresentacao,
      });
      res.status(201).json(novoPsicologo);
    } catch (err) {
      next(err)
    }
  },

  async atualizarPsicologo(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, senha, apresentacao } = req.body;
      const newSenha = bcrypt.hashSync(senha, 10);
      
      const psicologoAtualizado = await Psicologos.update(
        {
          nome,
          email,
          senha: newSenha,
          apresentacao,
        },
        {
          where: {
            psicologo_id: id,
          },
        }
      );
      const umPsicologo = await Psicologos.findOne({
        where: {
          psicologo_id: id,
        },
      });
      if (umPsicologo === null) {
        res.status(404).json("ID não encontrado");
      } else {
        res.status(200).json(umPsicologo);
      }
    } catch (err) {
      next(err)
    }
  },
  async deletarPsicologo(req, res, next) {
    try {
      const { id } = req.params;
      const umPsicologo = await Psicologos.findOne({
        where: {
          psicologo_id: id,
        },
      });
      const deletandoPsicologo = await Psicologos.destroy({
        where: {
          psicologo_id: id,
        },
      });
      if (umPsicologo === null) {
        res.status(404).json("ID não encontrado");
      } else {
        res.sendStatus(204);
      }
    } catch (error) {
      next(error)
    }
  },
};

module.exports = psicologosController;
