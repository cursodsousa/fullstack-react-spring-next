package io.github.dougllasfps.vendasapi.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.dougllasfps.vendasapi.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {

}
