const {Psicologos, Atendimentos, Pacientes}  = require("../models");

const atendimentosController = {
    async listarAtendimentos (req, res) {
        try{
            const listaAtendimentos = await Atendimentos.findAll({
                include: [
                    {model: Psicologos, attributes : ['psicologo_id', 'nome', 'email']}, 
                    {model: Pacientes}],
            });
            res.json(listaAtendimentos)
            res.status(200);
        }catch(error){
            return res.status(500).json();
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
                res.status(404).json("ID não encontrado.")
            } else{
                res.json(atendimentoId)
                res.status(200);
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
                res.status(201);
            }else{
                res.status(401).json("Token invalido! Faça login novamente!");
            }
            
        }catch(error){
            return res.status(500).json("Houve algum problema na requisição");
        }
    },
}
module.exports = atendimentosController;