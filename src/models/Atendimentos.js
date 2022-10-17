const db = require("../database");
const { DataTypes } = require("sequelize");

const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");

const Atendimentos = db.define(
  "Atendimentos",
  {
    atendimentos_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    paciente_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Pacientes,
          key: "paciente_id",
        },
      },
    psicoloco_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Psicologos,
            key: "psicologo_id",
        },
    },
    data_atendimento: {
      type: DataTypes.DATE,
    },
    observacoes:{
        type: DataTypes.STRING,
    }
  },
  {
    tableName: "atendimentos",
  }
);

module.exports = Atendimentos;
