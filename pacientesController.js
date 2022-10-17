const Pacientes = require("../models/Pacientes");

const pacientesController = {
    listarPacientes: (req, resp)=>{
        request.json([{nome: "Paciente1"},{nome: "Paciente2"}]);
    },
    
    async cadastrarPaciente(req, res){
        const {id, nome, email, idade} = req.body;

        const novoPaciente = await Pacientes.create({
            id,
            nome,
            email,
            idade,
        });

        res.json(novoPaciente);
    },
};

module.exports = pacientesController;