package io.github.dougllasfps.vendasapi.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.dougllasfps.vendasapi.model.Venda;

public interface VendaRepository extends JpaRepository<Venda, Long> {

}
