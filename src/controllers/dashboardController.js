const {Pacientes, Psicologos, Atendimentos} = require("../models");

const dashboardController = {
    countPacientes: async (req, res) => {
        try {
          const pacientes = await Pacientes.count();
          res.json(`Número de pacientes: ${pacientes}`);
          res.status(200);
        } catch (error) {
          return res.status(500);
        }
      },
      countPsicologos: async (req, res) => {
        try {
          const psicologos = await Psicologos.count();
          res.json(`Número de psicólogos: ${psicologos} `);
          res.status(200);
        } catch (error) {
            return res.status(500);
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
          return res.json(`Número de atendimentos: ${atendimentos}`);
          res.status(200);
        } catch (error) {
            return res.status(500);
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
          res.status(200);
        } catch (error) {
            return res.status(500);
        }
      },
}
module.exports = dashboardController;