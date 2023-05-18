package npi.sistemas.backend.dependente.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import npi.sistemas.backend.dependente.model.Dependente;


@Repository
public interface DependenteRepository extends JpaRepository<Dependente, Long> {

}