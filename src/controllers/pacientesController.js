// const Pacientes = require("../models/Pacientes");

// const pacientesController = {
//     listarPacientes: (req, resp)=>{
//         request.json([{nome: "Paciente1"},{nome: "Paciente2"}]);
//     },
    
//     async cadastrarPaciente(req, res){
//         const {id, nome, email, idade} = req.body;

//         const novoPaciente = await Pacientes.create({
//             id,
//             nome,
//             email,
//             idade,
//         });

//         res.json(novoPaciente);
//     },
// };

// module.exports = pacientesController;

const { Pacientes } = require("../models")

const pacientesController = {
    
    async listarTodosPacientes(req, res){
        try {
            
            const listaDeTodosPacientes = await Pacientes.findAll()

            res.status(200).json(listaDeTodosPacientes)
       } catch (error) {
        return res.status(200).json("{}");
        }
},
    async listarUmPaciente(req, res) {
        try {

            const { id } = req.params
            
            
            const umPaciente = await Pacientes.findOne({
                where: {
                    paciente_id: id,
                }
            })
            if (umPaciente === null) {
                res.status(404).json("Não encontrado")
            } else {
            res.status(200).json(umPaciente)}
            
        } catch (error) {
           console.log(error)
        }
    },

    async criarPaciente(req, res) {
        try{
            const { nome, email, idade } = req.body;
            const newIdade = new Date(req.body.idade)
            const novoPaciente = await Pacientes.create({ 
              nome,
              email,
              idade: newIdade,
            });
            res.status(201).json(novoPaciente);
        } catch (err){
            res.status(400).json("Houve algum problema na requisição")
        }
      },

    async atualizarPaciente(req, res) {
        const { id } = req.params;
        const { nome, email, idade } = req.body;

        if (!id) return res.status(400).json("id não enviado");

        const pacienteAtualizado = await Pacientes.update(
            {
              nome,
              email,
              idade,
            },
            {
              where: {
                id,
              },
            }
          );
      
          res.json("Paciente Atualizado");
    },
    async deletarPaciente(req, res) {
        try {
            const { id } = req.params

            const deletandoPaciente = await Pacientes.destroy({
                where: {
                    paciente_id: id,
                }
            })
            res.status(204).json("Paciente Deletado")
        } catch (error) {
            res.status(404).json("Id não encontrado")
        }
    },
}

module.exports = pacientesController