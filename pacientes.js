const db = require("database");
const {DataTypes} = require ("sequelize");

const pacientes = db.pacientes(
    "pacientes",
    {
        id:{
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true,
        },
        nome:{
            type: DataTypes.STRING,
        },
        email:{
            type: DataTypes.STRING,
        },
        idade:{
            type: DataTypes.INTEGER,
        }
    },
    {
        tableNAME: "Pacientes",
    }
);