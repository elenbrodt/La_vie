const db = require("../database");
const { DataTypes } = require("sequelize");

const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");

const PsicologoPaciente = db.define(
  "PsicologoPaciente",
  {
    psicologo_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Psicologos,
        key: "psicologo_id",
      },
    },
    paciente_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Pacientes,
        key: "paciente_id",
      },
    },
  },
  {
    tableName: "psicologo_paciente",
  }
);

module.exports = PsicologoPaciente;
