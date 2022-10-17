const { Psicologos } = require("../models")
const bcrypt = require("bcryptjs");

const psicologosController = {
    
    async listarTodosPsicologos(req, res){
        try {
            
            const listaDeTodosPsicologos = await Psicologos.findAll()

            res.status(200).json(listaDeTodosPsicologos)
       } catch (error) {
        return res.status(200).json("{}");
        }
},
    async listarUmPsicologo(req, res) {
        try {

            const { id } = req.params
            const psicologo_id = Psicologos.psicologo_id
            
            const umPsicologo = await Psicologos.findOne({
                where: {
                    psicologo_id: id,
                }
            })
            if (umPsicologo === null) {
                res.status(404).json("ID Não encontrado")
            } else {
            res.status(200).json(umPsicologo)}
            
        } catch (error) {
           console.log(error)
        }
    },

    async criarPsicologo(req, res) {
        try{
            const { nome, email, senha, apresentacao } = req.body;
            const newSenha = bcrypt.hashSync(senha, 5);
            
            const novoPsicologo = await Psicologos.create({ 
              nome,
              email,
              senha: newSenha,
              apresentacao,
            });
            res.status(201).json(novoPsicologo);
        } catch (err){
            res.status(400).json("Houve algum problema na requisição")
        }
      },

    async atualizarPsicologo(req, res) {
        const { id } = req.params;
        const { nome, email, senha, apresentacao } = req.body;

        if (!id) return res.status(400).json("id não enviado");

        const psicologoAtualizado = await Psicologos.update(
            {
              nome,
              email,
              senha,
              apresentacao,
            },
            {
              where: {
                id,
              },
            }
          );
      
          res.json("Psicólogo Atualizado");
    },
    async deletarPsicologo(req, res) {
        try {
            const { id } = req.params

            const deletandoPsicologo = await Psicologos.destroy({
                where: {
                    psicologo_id: id,
                }
            })
            res.status(204).json("Psicólogo Deletado")
        } catch (error) {
            res.status(404).json("Id não encontrado")
        }
    },
}

module.exports = psicologosController