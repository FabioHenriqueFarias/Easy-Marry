package br.com.easymarry.easymarry.model.entities;


import jakarta.persistence.*;
import lombok.*;
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

    private String firstPersonName;

    private String secondPersonName;

    private String firstPersonCpf;

    private String secondPersonCpf;

    private String weddingDate;

    private String email;

    private String desiredServices;

    private String address;

    private String telephone;

    private String password;

    @OneToMany(mappedBy = "casal")
    private List<SolicitacaoOrcamento> solicitacoesOrcamento;
}

