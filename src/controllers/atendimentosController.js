const {Psicologos, Atendimentos, Pacientes}  = require("../models");

const atenidmentosController = {
    async listarAtendimentos (req, res) {
        try{
            const listaAtendimentos = await Atendimentos.findAll({
                include: Psicologos,
            });
            res.json(listaAtendimentos)
            res.status(204);
        }catch(error){
            return res.status(500).json("Ocorreu algum problema");
        }
        
    },
    async listarAtendimento (req, res) {
        try{
            const {id} = req.params;
            const atendimentoId = await Atendimentos.findOne({
                where: {
                    atendimento_id: id,
                },
            });
            if (atendimentoId === null) {
                res.status(404).json("ID Não encontrado")
            } else{
                res.json(atendimentoId)
            res.status(204);
            }
        }catch(error){
            return res.status(500).json("Ocorreu algum problema");
        }
        
    },
    async criarAtendimento(req, res) {
        try{
            console.log(req.auth);
            const {paciente_id, psicologo_id, data_atendimento, observacoes} = req.body;
            if (req.auth.psicologo_id == psicologo_id){
                const atendimentoCriado = await Atendimentos.create({
                    psicologo_id,paciente_id,data_atendimento, observacoes
                });
                res.json(atendimentoCriado)
                res.status(204);
            }else{
                res.status(500).json("Token invalido! Faça login novamente!");
            }
            
        }catch(error){
            return res.status(500).json("Favor verifique o paciente_id");
        }
    },
}
module.exports = atenidmentosController;