package br.com.easymarry.easymarry.controller;


import br.com.easymarry.easymarry.model.entities.Servico;
import br.com.easymarry.easymarry.service.ServicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/servicos")
public class ServicoController {

    @Autowired
    private ServicoService servicoService;

    @GetMapping
    public List<Servico> getAllServicos() {
        return servicoService.findAll();
    }

    // Adicione outros métodos conforme necessário, como create, update, delete, findById, etc.
}

