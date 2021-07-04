package io.github.dougllasfps.vendasapi.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import io.github.dougllasfps.vendasapi.model.Venda;
import io.github.dougllasfps.vendasapi.model.repository.projections.VendaPorMes;

public interface VendaRepository extends JpaRepository<Venda, Long> {

	@Query(nativeQuery = true,
			value = "select "
					+ "	extract( month from v.data_venda ) as mes, "
					+ "	sum(v.total) as valor"
					+ " from venda as v"
					+ " where extract (year from v.data_venda) = :ano"
					+ " group by extract( month from v.data_venda )"
					+ " order by extract( month from v.data_venda )"
	)
	List<VendaPorMes> obterSomatoriaVendasPorMes(@Param("ano") Integer ano);

}
