package io.github.dougllasfps.vendasapi.rest.produtos;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import io.github.dougllasfps.vendasapi.model.Produto;
import io.github.dougllasfps.vendasapi.model.repository.ProdutoRepository;

@RestController
@RequestMapping("/api/produtos")
@CrossOrigin("*")
public class ProdutoController {
	
	@Autowired
	private ProdutoRepository repository;

	@PostMapping
	public ProdutoFormRequest salvar( @RequestBody ProdutoFormRequest produto ) {
		Produto entidadeProduto = produto.toModel();
		repository.save(entidadeProduto);
		return ProdutoFormRequest.fromModel(entidadeProduto);
	}
	
	@PutMapping("{id}")
	public ResponseEntity<Void> atualizar(@PathVariable Long id, @RequestBody ProdutoFormRequest produto ) {
		Optional<Produto> produtoExistente = repository.findById(id);
		
		if(produtoExistente.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		Produto entidade = produto.toModel();
		entidade.setId(id);
		repository.save(entidade);
		
		return ResponseEntity.ok().build();
	}
	
	
}
