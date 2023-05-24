package br.com.easymarry.easymarry.repository;

import br.com.easymarry.easymarry.model.entities.Casal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface CasalRepository extends JpaRepository<Casal, Long> {
}
