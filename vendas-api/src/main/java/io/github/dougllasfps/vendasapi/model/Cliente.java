package io.github.dougllasfps.vendasapi.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;

@Entity
@Table(name = "cliente")
public class Cliente {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private LocalDate nascimento;
	private String cpf;
	private String nome;
	private String endereco;
	private String telefone;
	private String email;
	
	@Column(name = "data_cadastro")
	private LocalDate dataCadastro;

	public Cliente() {
		super();
	}

	public Cliente(Long id, LocalDate nascimento, String cpf, String nome, String endereco, String telefone,
			String email, LocalDate dataCadastro) {
		super();
		this.id = id;
		this.nascimento = nascimento;
		this.cpf = cpf;
		this.nome = nome;
		this.endereco = endereco;
		this.telefone = telefone;
		this.email = email;
		this.dataCadastro = dataCadastro;
	}
	
	/**
	 * @param nascimento
	 * @param cpf
	 * @param nome
	 * @param endereco
	 * @param telefone
	 * @param email
	 */
	public Cliente(LocalDate nascimento, String cpf, String nome, String endereco, String telefone, String email) {
		super();
		this.nascimento = nascimento;
		this.cpf = cpf;
		this.nome = nome;
		this.endereco = endereco;
		this.telefone = telefone;
		this.email = email;
	}
	
	@PrePersist
	public void prePersist() {
		setDataCadastro(LocalDate.now());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getNascimento() {
		return nascimento;
	}

	public void setNascimento(LocalDate nascimento) {
		this.nascimento = nascimento;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public LocalDate getDataCadastro() {
		return dataCadastro;
	}

	public void setDataCadastro(LocalDate dataCadastro) {
		this.dataCadastro = dataCadastro;
	}

	@Override
	public String toString() {
		return "Cliente [id=" + id + ", nascimento=" + nascimento + ", cpf=" + cpf + ", nome=" + nome + ", endereco="
				+ endereco + ", telefone=" + telefone + ", email=" + email + ", dataCadastro=" + dataCadastro + "]";
	}
	
	

}
