package npi.sistemas.backend.socio.model;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "socio")
public class Socio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 50, nullable = false)
    @NotNull
    @Size(min = 5, max = 50)
    private String nome;

    @Column(nullable = false, precision = 10, scale = 2)
    @NotNull
    @DecimalMin(value = "0.00")
    private BigDecimal renda;

    @Column(nullable = false)
    @NotNull
    private Boolean ativo; 
    
    public Socio() {
        this.id = null;
        this.nome = null;
        this.renda = null;
        this.ativo = null;
    }
    
    public Socio(@NotNull @Size(min = 5, max = 50) String nome, @NotNull @DecimalMin("0.00") BigDecimal renda, @NotNull Boolean ativo) {
        this.id = null;
        this.nome = nome;
        this.renda = renda;
        this.ativo = ativo;
    }
    
    // Getters
    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }
    
    // Setter
    public void setNome(String nome) {
        this.nome = nome;
    }

    public BigDecimal getRenda() {
        return renda;
    }
    
    // Setter
    public void setRenda(BigDecimal renda) {
        this.renda = renda;
    }

    public Boolean getAtivo() {
        return ativo;
    }
    
    // Setter
    public void setAtivo(Boolean ativo) {
        this.ativo = ativo;
    }
}
