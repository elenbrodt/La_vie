const ERRORS = {
    ID_NOT_FOUND:"ID não encontrada!",
    DELETE:{
        CONSTRAINT: "Existe relacionamento com esse id, não é possivel deletar"
    },
    AUTH:{
        EMAIL:"Email não cadastrado!",
        PASSWORD:"Senha invalida!"
    },
    DB_CONNECTION: "Error ao tentar uma conexão com banco dados"
}
module.exports = ERRORS;