package io.github.dougllasfps.vendasapi.validation;

public class CampoErro {
	private String campo;
	private String mensagem;
	public String getCampo() {
		return campo;
	}
	public void setCampo(String campo) {
		this.campo = campo;
	}
	public String getMensagem() {
		return mensagem;
	}
	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}
	/**
	 * 
	 */
	public CampoErro() {
		super();
		// TODO Auto-generated constructor stub
	}
	/**
	 * @param campo
	 * @param mensagem
	 */
	public CampoErro(String campo, String mensagem) {
		super();
		this.campo = campo;
		this.mensagem = mensagem;
	}
	
	
}
