package br.com.easymarry.easymarry.controller;


import br.com.easymarry.easymarry.model.entities.SolicitacaoOrcamento;
import br.com.easymarry.easymarry.service.SolicitacaoOrcamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/solicitacoes")
public class SolicitacaoOrcamentoController {

    @Autowired
    private SolicitacaoOrcamentoService solicitacaoOrcamentoService;

    @GetMapping
    public List<SolicitacaoOrcamento> getAllSolicitacoes() {
        return solicitacaoOrcamentoService.findAll();
    }

    // Adicione outros métodos conforme necessário, como create, update, delete, findById, etc.
}

