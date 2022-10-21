const ERRORS = {
    ID_NOT_FOUND:"ID não encontrada!",
    DELETE:{
        CONSTRAINT: "Existe relacionamento com esse id, não é possivel deletar"
    },
    AUTH:{
        EMAIL:"Email não cadastrado!",
        PASSWORD:"Senha invalida!"
    },
    DB: "Error ao tentar uma conexão com banco dados",
    CREATE_FAIL: "Houve um problema na requisição, verifique o paciente_id"
}
module.exports = ERRORS;