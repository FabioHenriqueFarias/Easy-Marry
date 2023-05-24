package br.com.easymarry.easymarry.model.entities;



import jakarta.persistence.*;
import lombok.*;

//import javax.persistence.*;
import java.util.Date;
import java.util.List;

@AllArgsConstructor
@Entity
@Table(name = "casal")
@Data
@NoArgsConstructor
@Getter
@Setter
public class Casal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome1;

    private String nome2;

    private String email;

    private String senha;

    private Date dataCasamento;

    // Outros atributos, como preferências, podem ser adicionados conforme necessário

    @OneToMany(mappedBy = "casal")
    private List<SolicitacaoOrcamento> solicitacoesOrcamento;
}

