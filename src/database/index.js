const Sequelize = require("sequelize");
const ERRORS = require("../constants/errors")
const SUCCESS = require("../constants/success")
const DB_NAME = "la_vie";
const DB_USER = "root";
const DB_PASS = "mysql";
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  define: {
    timestamps: false
}
};

// objeto para guardar a conexão do banco dados
let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.error(ERRORS.DB);
}

async function hasConection() {
  try {
    await db.authenticate();
    console.log(SUCCESS.DB);
  } catch (error) {
    console.error(ERRORS.DB);
  }
}

Object.assign(db, {
  hasConection,
});

module.exports = db;
