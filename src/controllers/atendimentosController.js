const {Psicologos, Pacientes, Atendimentos}  = require("../models");

const atenidmentosController = {
    async listarAtendimentos (req, res) {
        try{
            const listaAtendimentos = await Atendimentos.findAll();
            res.json(listaAtendimentos)
            res.status(204);
        }catch(error){
            return res.status(500).json("Ocoreu algum problema");
        }
        
    },
    async listarAtendimento (req, res) {
        try{
            const {id} = req.params;
            const atendimentoId = await Atendimentos.findAll({
                where: {
                    atendimento_id: id,
                },
            });
            res.status(204);
        }catch(error){
            return res.status(500).json("Ocoreu algum problema");
        }
        
    },
    async criarAtendimento(req, res) {
        try{
            console.log(req.auth);
            const {paciente_id, psicologo_id, data_atendimento, abservacoes} = req.body;
            const atendimentoCriado = await Atendimentos.create({
                psicologo_id,paciente_id,data_atendimento, abservacoes
            });
            //const paciente = await Pacientes.findByPk(paciente_id);
            //await atendimentoCriado.setPacientes(paciente);
            //const psicologo = await Psicologos.findByPk(psicologo_id);
            //await atendimentoCriado.setPsicologos(psicologo);
            res.json(atendimentoCriado)
            res.status(204);
        }catch(error){
            return res.status(500).json("Ocoreu algum problema");
        }
    },
}
module.exports = atenidmentosController;