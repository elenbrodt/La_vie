const {Atendimentos}  = require("../models");
const {Pacientes} = require("../models");

const atenidmentosController = {
    async listarAtendimentos (req, res) {
        const listaAtendimentos = await Atendimentos.findAll();
        res.json(listaAtendimentos);
    },
    async listarAtendimento (req, res) {
        const {id} = req.params;
        const atendimentoId = await Atendimentos.findAll({
            where: {
                atendimento_id: id,
              },
        });
        res.json(atendimentoId);
    },
    async criarAtendimento(req, res) {
        const {paciente_id, psicologo_id, data_atendimento, abservacoes} = req.body;
        const atendimentoCriado = await Atendimentos.create({
            paciente_id,psicologo_id,data_atendimento, abservacoes
        });
        res.json(atendimentoCriado)
    },
}
module.exports = atenidmentosController;