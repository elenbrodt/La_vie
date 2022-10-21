const {Pacientes, Psicologos, Atendimentos} = require("../models");

const SUCCESS = require("../constants/success")

const dashboardController = {
    countPacientes: async (req, res, next) => {
        try {
          const pacientes = await Pacientes.count();
          res.json(SUCCESS.PACIENTES + pacientes);
          res.status(200);
        } catch (error) {
          next(error)
        }
      },
      countPsicologos: async (req, res, next) => {
        try {
          const psicologos = await Psicologos.count();
          res.json(SUCCESS.PSICOLOGOS + psicologos);
          res.status(200);
        } catch (error) {
          next(error)
        }
      },
      countAtendimentos: async (req, res, next) => {
        try {
          const atendimentos = await Atendimentos.count({
            include: [
              {
                model: Pacientes,
              },
              {
                model: Psicologos,
              },
            ],
          });
          return res.status(200).json(SUCCESS.ATENDIMENTOS + atendimentos);
        } catch (error) {
            next(error)
        }
      },
      averageAtendimentos: async (req, res, next) => {
        try {
          const atendimentos = await Atendimentos.count();
          const psicologos = await Psicologos.count();
          res.json(
            SUCCESS.MEDIA + (
              atendimentos / psicologos
            ).toFixed(2)
          );
          res.status(200);
        } catch (error) {
          next(error)
        }
      },
}
module.exports = dashboardController;