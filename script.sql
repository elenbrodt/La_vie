CREATE DATABASE la_vie;
USE la_vie;

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `psicologos` (
  `psicologo_id` int(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `senha` varchar(250) DEFAULT NULL,
  `apresentacao` varchar(200) DEFAULT NULL  
) ENGINE=InnoDB AUTO_INCREMENT=255 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pacientes` (
  `paciente_id` int(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `idade` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=255 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `atendimentos` (
    `atendimento_id` INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `paciente_id` INT(10) DEFAULT NULL,
    `psicologo_id` INT(10) DEFAULT NULL,
    FOREIGN KEY (`paciente_id`) REFERENCES `pacientes` (`paciente_id`),
    FOREIGN KEY (`psicologo_id`) REFERENCES `psicologos` (`psicologo_id`),
    `data_atendimento` DATE DEFAULT NULL,
    `observacoes` VARCHAR(500) DEFAULT NULL
)  ENGINE=INNODB AUTO_INCREMENT=255 DEFAULT CHARSET=UTF8;
/*!40101 SET character_set_client = @saved_cs_client */;

SELECT * FROM atendimentos;
INSERT INTO pacientes (nome, email, idade) VALUES ('paciente1', 'paciente1@email.com', '2000-10-12');

CREATE TABLE `PsicologoPaciente` (
    `psicologo_id` INT(10) DEFAULT NULL, 
    `paciente_id` INT(10) DEFAULT NULL,
    FOREIGN KEY (`psicologo_id`) REFERENCES `psicologos` (`psicologo_id`), 
	FOREIGN KEY (`paciente_id`) REFERENCES `pacientes` (`paciente_id`)
)  ENGINE=INNODB AUTO_INCREMENT=255 DEFAULT CHARSET=UTF8;
/*!40101 SET character_set_client = @saved_cs_client */;


SELECT * FROM psicologos;