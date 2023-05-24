package br.com.easymarry.easymarry.model.entities;



import jakarta.persistence.*;
import lombok.*;

//import javax.persistence.*;
import java.util.Date;

@AllArgsConstructor
@Entity
@Table(name = "solicitacao_orcamento")
@Data
@NoArgsConstructor
@Getter
@Setter
public class SolicitacaoOrcamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "casal_id", nullable = false)
    private Casal casal;

    @ManyToOne
    @JoinColumn(name = "fornecedor_id", nullable = false)
    private Fornecedor fornecedor;

    @ManyToOne
    @JoinColumn(name = "servico_id", nullable = false)
    private Servico servico;

    private String mensagem;

    private Date dataSolicitacao;

    private String status;

    // Outros atributos podem ser adicionados conforme necessário
}

