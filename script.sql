CREATE DATABASE la_vie;
USE la_vie;

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `psicologos` (
  `psicologo_id` int(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(250) NOT NULL,
  `apresentacao` varchar(200) NOT NULL  
) ENGINE=InnoDB AUTO_INCREMENT=255 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pacientes` (
  `paciente_id` int(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `idade` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=255 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `atendimentos` (
    `atendimento_id` INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `paciente_id` INT(10) NOT NULL,
    `psicologo_id` INT(10) NOT NULL,
    KEY `fk_paciente` (`paciente_id`),
    CONSTRAINT `fk_paciente` FOREIGN KEY (`paciente_id`)
        REFERENCES `pacientes` (`paciente_id`),
    KEY `fk_psicologo` (`psicologo_id`),
    CONSTRAINT `fk_psicologo` FOREIGN KEY (`psicologo_id`)
        REFERENCES `psicologos` (`psicologo_id`),
    `data_atendimento` DATE NOT NULL,
    `observacoes` VARCHAR(500) NOT NULL
)  ENGINE=INNODB AUTO_INCREMENT=255 DEFAULT CHARSET=UTF8;
/*!40101 SET character_set_client = @saved_cs_client */;

<<<<<<< HEAD
SELECT * FROM pacientes
SELECT * FROM psicologos

INSERT INTO pacientes (nome, email, idade) VALUES ('paciente1', 'paciente1@email.com', '12/10/2000');
>>>>>>> 50899d41523f09358c6edb8a02053b9bf617c1a6
