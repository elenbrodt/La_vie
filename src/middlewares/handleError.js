const { UnauthorizedError } = require("express-jwt");
const { ValidationError } = require("express-validation");
const ERRORS = require("../constants/errors");

module.exports = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    return res.status(error.statusCode).json(error);
  }

  if (error instanceof UnauthorizedError) {
    return res.status(error.status).json(error);
  }

  if (error.name === "SequelizeForeignKeyConstraintError") {
    if(error.parent.code === "ER_NO_REFERENCED_ROW_2"){
      return res
      .status(400)
      .json(ERRORS.CREATE_FAIL);
    }
    return res
      .status(400)
      .json(ERRORS.DELETE.CONSTRAINT);
  }

  return res.status(500).json(error);
};