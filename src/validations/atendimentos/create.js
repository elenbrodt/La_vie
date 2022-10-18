const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    paciente_id: Joi.required(),
    psicologo_id: Joi.required(),
    observacoes: Joi.string().required(),
    data_atendimento: Joi.date().required(),
    observacoes: Joi.string().required(),
  }),
});

