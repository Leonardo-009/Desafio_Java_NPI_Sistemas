package npi.sistemas.backend.dependente.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import npi.sistemas.backend.dependente.exception.ResourceNotFoundException;
import npi.sistemas.backend.dependente.model.Dependente;
import npi.sistemas.backend.dependente.repository.DependenteRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/backend/dependente")
public class DependenteController {

    @Autowired
    private DependenteRepository dependenteRepository;

    @GetMapping
    public List<Dependente> getAllDependentes() {
        return dependenteRepository.findAll();
    }

    @PostMapping
    public Dependente createDependente(@Valid @RequestBody Dependente dependente) {
        return dependenteRepository.save(dependente);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Dependente> getDependenteById(@PathVariable Long id) {
        Dependente dependente = dependenteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Dependente not found with id: " + id));
        return ResponseEntity.ok(dependente);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Dependente> updateDependente(@PathVariable Long id,
                                                       @Valid @RequestBody Dependente dependenteDetails) {
        Dependente dependente = dependenteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Dependente not found with id: " + id));

        dependente.setNome(dependenteDetails.getNome());
        dependente.setIdade(dependenteDetails.getIdade());

        Dependente updatedDependente = dependenteRepository.save(dependente);
        return ResponseEntity.ok(updatedDependente);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteDependente(@PathVariable Long id) {
        Dependente dependente = dependenteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Dependente not found with id: " + id));

        dependenteRepository.delete(dependente);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
