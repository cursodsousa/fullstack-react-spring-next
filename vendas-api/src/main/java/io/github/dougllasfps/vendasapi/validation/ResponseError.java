package io.github.dougllasfps.vendasapi.validation;

import java.util.ArrayList;
import java.util.List;

import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

public class ResponseError {

	private String message;
	private List<CampoErro> errors;
	
	public ResponseError() {
		this(null);
	}

	public ResponseError(BindingResult result) {
		super();
		this.errors = new ArrayList<>();
		if (result != null && result.hasErrors()) {
			result.getAllErrors().forEach(e -> {
				FieldError fe = (FieldError) e;
				errors.add(new CampoErro(fe.getField(), fe.getDefaultMessage()));
			});
		}
	}
	
	public boolean hasErrors() {
		return !this.errors.isEmpty();
	}

	public void addError(String field, String msg) {
		this.errors.add(new CampoErro(field, msg));
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public List<CampoErro> getErrors() {
		return errors;
	}
}
