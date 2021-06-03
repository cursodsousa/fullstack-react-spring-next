CREATE DATABASE VENDAS;

CREATE TABLE PRODUTO (
	ID BIGSERIAL NOT NULL PRIMARY KEY,
	NOME VARCHAR(100) NOT NULL,
	DESCRICAO VARCHAR(255),
	PRECO NUMERIC(16,2),
	SKU VARCHAR(20),
	DATA_CADASTRO DATE
);

CREATE TABLE cliente (
	id bigserial not null primary key,
	nascimento date not null,
	nome varchar(100) not null,
	endereco varchar(255) not null,
	cpf varchar(14) not null,
	telefone varchar(14),
	email varchar(100),
	data_cadastro date
);