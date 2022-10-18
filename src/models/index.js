const Psicologos = require("./Psicologos");
const Pacientes = require("./Pacientes");
const Atendimentos = require("./Atendimentos");
const PsicologoPaciente = require("./PsicologoPaciente");


Psicologos.belongsToMany(Pacientes,{
    foreignKey: "psicologo_id",
    through: PsicologoPaciente
}),
Pacientes.belongsToMany(Psicologos,{
    foreignKey: "psicologo_id",
    through: PsicologoPaciente
}),

Psicologos.hasMany(Atendimentos, {
    foreignKey: "atendimento_id",
})
Atendimentos.belongsTo(Psicologos, {
    foreignKey: "psicologo_id",
})

Pacientes.hasMany(Atendimentos,{
    foreignKey: "atendimento_id"
})
Atendimentos.belongsTo(Pacientes,{
    foreignKey: "paciente_id"
})

module.exports = {
    Psicologos,
    Pacientes,
    Atendimentos,
    PsicologoPaciente
}