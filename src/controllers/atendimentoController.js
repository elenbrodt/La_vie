const Atendimentos  = require("../models/Atendimentos");
const Pacientes = require("../models/Pacientes");

const atenidmentoController = {
    async listarAtendimentos (req, res) {
        const listaAtendimentos = await Atendimentos.findAll();
        res.json(listaAtendimentos);
    },
    async criarAtendimento(req, res) {
        const {paciente_id, psicologo_id, data_atendimento, abservacoes} = req.body;
        const atendimentoCriado = await Atendimentos.create({
            paciente_id, psicologo_id,data_atendimento, abservacoes
        })
        
        //const paciente = await Pacientes.findByPk(paciente_id);
        //await atendimentoCriado.setPacientes(paciente);

        //const psicologo = await Pacientes.findByPk(psicologo_id);
        //await atendimentoCriado.setPacientes(psicologo);

        res.json(atendimentoCriado)
    },
}
module.exports = atenidmentoController;