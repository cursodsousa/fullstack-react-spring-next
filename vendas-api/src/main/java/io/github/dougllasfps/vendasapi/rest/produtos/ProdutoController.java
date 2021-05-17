package io.github.dougllasfps.vendasapi.rest.produtos;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {

	@PostMapping
	public ProdutoFormRequest salvar( @RequestBody ProdutoFormRequest produto ) {
		System.out.println(produto);
		return produto;
	}
}
