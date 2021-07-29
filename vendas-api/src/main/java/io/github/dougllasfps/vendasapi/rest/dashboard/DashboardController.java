package io.github.dougllasfps.vendasapi.rest.dashboard;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.github.dougllasfps.vendasapi.model.repository.ClienteRepository;
import io.github.dougllasfps.vendasapi.model.repository.ProdutoRepository;
import io.github.dougllasfps.vendasapi.model.repository.VendaRepository;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin("*")
public class DashboardController {

	@Autowired
	private VendaRepository vendas;
	@Autowired
	private ClienteRepository clientes;
	@Autowired
	private ProdutoRepository produtos;
	
	@GetMapping
	public DashboardData getDashBoard() {
		long vendasCount = vendas.count();
		long clientesCount = clientes.count();
		long produtosCount = produtos.count();
		
		var anoCorrente = LocalDate.now().getYear();
		var vendasPorMes = vendas.obterSomatoriaVendasPorMes(anoCorrente);
		
		return new DashboardData(produtosCount, clientesCount, vendasCount, vendasPorMes);
		
	}
}
