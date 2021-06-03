package io.github.dougllasfps.vendasapi.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.dougllasfps.vendasapi.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {

}
