package br.com.easymarry.easymarry.repository;



import br.com.easymarry.easymarry.model.entities.SolicitacaoOrcamento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SolicitacaoOrcamentoRepository extends JpaRepository<SolicitacaoOrcamento, Long> {
}

