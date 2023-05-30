package br.com.easymarry.easymarry.controller;
import br.com.easymarry.easymarry.model.entities.Fornecedor;
import br.com.easymarry.easymarry.service.FornecedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/fornecedores")
@CrossOrigin(origins = "http://localhost:3000")
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
    @PutMapping("/{id}")
    public Fornecedor updateFornecedor(@PathVariable Long id, @RequestBody Fornecedor fornecedor) {
        fornecedor.setId(id); // Define o ID do fornecedor com base no parâmetro do caminho
        return fornecedorService.save(fornecedor);
    }

    @DeleteMapping("/{id}")
    public void deleteFornecedor(@PathVariable Long id) {
        fornecedorService.deleteById(id);
    }
}




