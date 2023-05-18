package npi.sistemas.backend.socio.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import npi.sistemas.backend.socio.exception.ResourceNotFoundException;
import npi.sistemas.backend.socio.model.Socio;
import npi.sistemas.backend.socio.repository.SocioRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/backend/")
public class SocioController {

    @Autowired
    private SocioRepository socioRepository;

    @GetMapping("/socio")
    public List<Socio> getAllSocios(){
        return socioRepository.findAll();
    }       

    @PostMapping("/socio")
    public Socio createSocio(@RequestBody Socio socio) {
        return socioRepository.save(socio);
    }

    @GetMapping("/socio/{id}")
    public ResponseEntity<Socio> getSocioById(@PathVariable Long id) {
        Socio socio = socioRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Socio not exist with id :" + id));
        return ResponseEntity.ok(socio);
    }

    @PutMapping("/socio/{id}")
    public ResponseEntity<Socio> updateSocio(@PathVariable Long id, @Valid @RequestBody Socio socioDetails) {
        Socio socio = socioRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Socio not found with id :" + id));

        socio.setNome(socioDetails.getNome());
        socio.setRenda(socioDetails.getRenda());
        socio.setAtivo(socioDetails.getAtivo());

        Socio updatedSocio = socioRepository.save(socio);
        return ResponseEntity.ok(updatedSocio);
    }

    @DeleteMapping("/socio/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteSocio(@PathVariable Long id){
        Socio socio = socioRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Socio not exist with id :" + id));

        socioRepository.delete(socio);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
