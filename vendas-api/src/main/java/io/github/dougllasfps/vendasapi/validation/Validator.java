package io.github.dougllasfps.vendasapi.validation;

public interface Validator<T> {

	ResponseError validate(T t);
	
}
