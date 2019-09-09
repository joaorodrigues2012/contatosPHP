CREATE DATABASE contatophp;

USE contatophp;

CREATE TABLE usuario(
	idUsuario   	INT PRIMARY KEY AUTO_INCREMENT,
	loginUsuario 	VARCHAR(45),
    nomeUsuario 	VARCHAR(45),
    senhaUsuario	VARCHAR(45)
);

CREATE TABLE contato(
	idContato   	INT PRIMARY KEY AUTO_INCREMENT,
	nomeContato 	VARCHAR(45),
    endereco 		VARCHAR(45),
    telefoneContato VARCHAR(45),
    celularContato 	VARCHAR(45),
    emailContato 	VARCHAR(45),
    usuario_id      INT,
    FOREIGN KEY (usuario_id) REFERENCES usuario(idUsuario)
);

INSERT INTO usuario(loginUsuario,nomeUsuario,senhaUsuario) VALUES('joao','admin','admin');