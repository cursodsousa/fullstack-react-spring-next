package io.github.dougllasfps.vendasapi.rest.clientes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import io.github.dougllasfps.vendasapi.model.repository.ClienteRepository;
import io.github.dougllasfps.vendasapi.validation.ResponseError;
import io.github.dougllasfps.vendasapi.validation.Validator;

@Component
public class ClienteValidator implements Validator<ClienteFormRequest>{
	
	@Autowired
	private ClienteRepository repository;

	@Override
	public ResponseError validate(ClienteFormRequest cliente) {
		ResponseError validation = new ResponseError();
		if(cliente.getCpf() == null) {
			validation.addError("cpf", "CPF Inválido!");
		}
		return validation;
	}

}
