const SUCCESS = {
    ID_NOT_FOUND:"ID não encontrada!",
    DELETE:{
        CONSTRAINT: "Existe relacionamento com esse id, não é possivel deletar"
    },
    AUTH:{
        EMAIL:"Email não cadastrado!",
        PASSWORD:"Senha invalida!"
    },
    SERVER: "Servidor rodando na porta 3000",
    DB: "Banco dados conectado!",
}
module.exports = SUCCESS;