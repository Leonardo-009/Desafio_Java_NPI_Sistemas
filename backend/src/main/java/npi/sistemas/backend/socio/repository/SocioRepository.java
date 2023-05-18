package npi.sistemas.backend.socio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import npi.sistemas.backend.socio.model.Socio;


@Repository
public interface SocioRepository extends JpaRepository<Socio, Long> {

}
