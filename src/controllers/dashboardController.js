const {Pacientes, Psicologos, Atendimentos} = require("../models");

const dashboardController = {
    countPacientes: async (req, res) => {
        try {
          const pacientes = await Pacientes.count();
          res.json(pacientes);
        } catch (error) {
          console.error(error);
        }
      },
      countPsicologos: async (req, res) => {
        try {
          const psicologos = await Psicologos.count();
          res.json(`${psicologos} psicologos`);
        } catch (error) {
          console.error(error);
        }
      },
      countAtendimentos: async (req, res) => {
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
          return res.json(`${atendimentos} atendimentos`);
        } catch (error) {
          console.error(error);
        }
      },
      averageAtendimentos: async (req, res) => {
        try {
          const atendimentos = await Atendimentos.count();
          const psicologos = await Psicologos.count();
          res.json(
            `Nossa média de atendimentos por psicologos é igual a ${(
              atendimentos / psicologos
            ).toFixed(2)}`
          );
        } catch (error) {
          console.error(error);
        }
      },
}
module.exports = dashboardController;