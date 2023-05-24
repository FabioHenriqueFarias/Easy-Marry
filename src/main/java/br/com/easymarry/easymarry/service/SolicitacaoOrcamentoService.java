package br.com.easymarry.easymarry.service;


import br.com.easymarry.easymarry.model.entities.SolicitacaoOrcamento;
import br.com.easymarry.easymarry.repository.SolicitacaoOrcamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SolicitacaoOrcamentoService {

    @Autowired
    private SolicitacaoOrcamentoRepository solicitacaoOrcamentoRepository;

    public List<SolicitacaoOrcamento> findAll() {
        return solicitacaoOrcamentoRepository.findAll();
    }

    // Adicionar outros métodos conforme necessário, como save, update, delete, findById, etc.
}

