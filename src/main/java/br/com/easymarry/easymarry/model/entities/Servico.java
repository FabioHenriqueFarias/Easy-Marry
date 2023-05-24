package br.com.easymarry.easymarry.model.entities;


import jakarta.persistence.*;
import lombok.*;
import jakarta.persistence.*;
//import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "servico")
@Data
@Getter
@Setter
public class Servico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private String descricao;

    private String categoria;

    private Double preco;

    // Outros atributos podem ser adicionados conforme necessário

    @ManyToOne
    @JoinColumn(name = "fornecedor_id", nullable = false)
    private Fornecedor fornecedor;
}

