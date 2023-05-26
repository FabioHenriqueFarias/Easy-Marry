package br.com.easymarry.easymarry.controller;



import br.com.easymarry.easymarry.model.entities.Fornecedor;
import br.com.easymarry.easymarry.service.FornecedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/fornecedores")
public class FornecedorController {

    @Autowired
    private FornecedorService fornecedorService;

    @GetMapping
    public List<Fornecedor> getAllFornecedores() {
        return fornecedorService.findAll();
    }

    @PostMapping
    public Fornecedor saveFornecedor(@RequestBody Fornecedor fornecedor) {
        return fornecedorService.save(fornecedor);
    }

    // Adicionar outros métodos conforme necessário, como create, update, delete, findById, etc.
}

