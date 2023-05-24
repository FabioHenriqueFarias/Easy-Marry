package br.com.easymarry.easymarry.repository;




import br.com.easymarry.easymarry.model.entities.Servico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServicoRepository extends JpaRepository<Servico, Long> {
}

