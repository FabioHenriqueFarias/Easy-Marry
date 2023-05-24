package br.com.easymarry.easymarry.model.entities;



import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

//import javax.persistence.*;
import java.util.List;

@AllArgsConstructor
@Entity
@Table(name = "fornecedor")
@Data
@NoArgsConstructor
@Getter
public class Fornecedor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private String email;

    private String senha;

    private String descricao;

    private String categoria;

    private String telefone;

    private String endereco;

    // Outros atributos podem ser adicionados conforme necessário

    @OneToMany(mappedBy = "fornecedor")
    private List<Servico> servicos;

    @OneToMany(mappedBy = "fornecedor")
    private List<SolicitacaoOrcamento> solicitacoesOrcamento;
}

