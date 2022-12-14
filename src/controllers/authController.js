const { Psicologos } = require("../models");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");
const bcrypt = require("bcryptjs");
const ERRORS = require("../constants/errors")

const AuthController = {
  async login(req, res) {
    try {
      const { email, senha } = req.body;

      const psicologo = await Psicologos.findOne({
        where: {
          email,
        },
      });

      if (!psicologo) {
        return res.status(401).json(ERRORS.AUTH.EMAIL);
      }

      if (!bcrypt.compareSync(senha, psicologo.senha)) {
        return res.status(401).json(ERRORS.AUTH.PASSWORD);
      }

      const token = jwt.sign(
        {
          psicologo_id: psicologo.psicologo_id,
          nome: psicologo.nome,
          email: psicologo.email,
          userType: "user",
        },
        secret.key
      );

      return res.json(token);
    } catch (error) {
        return res.status(200);
    }
  },
};

module.exports = AuthController;
