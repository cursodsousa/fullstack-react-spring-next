package io.github.dougllasfps.vendasapi.rest.produtos;

import java.math.BigDecimal;

public class ProdutoFormRequest {

	private String descricao;
	private String nome;
	private BigDecimal preco;
	private String sku;
	
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public BigDecimal getPreco() {
		return preco;
	}
	public void setPreco(BigDecimal preco) {
		this.preco = preco;
	}
	public String getSku() {
		return sku;
	}
	public void setSku(String sku) {
		this.sku = sku;
	}
	@Override
	public String toString() {
		return "ProdutoFormRequest [descricao=" + descricao + ", nome=" + nome + ", preco=" + preco + ", sku=" + sku
				+ "]";
	}
}
