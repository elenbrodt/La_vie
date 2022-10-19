CREATE DATABASE la_vie;

USE la_vie;

CREATE TABLE `psicologos` (
  `psicologo_id` INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(250) NOT NULL,
  `senha` VARCHAR(250) NOT NULL,
  `apresentacao` VARCHAR(200) NOT NULL 
);

CREATE TABLE `pacientes` (
  `paciente_id` INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(250) NOT NULL,
  `idade` DATE DEFAULT NULL
) ;

CREATE TABLE `atendimentos` (
    `atendimento_id` INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `paciente_id` INT(10) NOT NULL,
    `psicologo_id` INT(10) NOT NULL,
    FOREIGN KEY (`paciente_id`) REFERENCES `pacientes` (`paciente_id`),
    FOREIGN KEY (`psicologo_id`) REFERENCES `psicologos` (`psicologo_id`),
    `data_atendimento` DATE NOT NULL,
    `observacoes` VARCHAR(500) NOT NULL
)  ;