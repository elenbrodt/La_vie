const { UnauthorizedError } = require("express-jwt");
const { ValidationError } = require("express-validation");

module.exports = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    return res.status(error.statusCode).json(error);
  }

  if (error instanceof UnauthorizedError) {
    return res.status(error.status).json(error);
  }

  if (error.name === "SequelizeForeignKeyConstraintError") {
    return res
      .status(400)
      .json(
        "Existe relacionamento com esse id, não é possivel deletar"
      );
  }

  return res.status(500).json(error);
};