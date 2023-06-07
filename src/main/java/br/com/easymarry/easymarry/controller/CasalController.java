package br.com.easymarry.easymarry.controller;

import br.com.easymarry.easymarry.model.entities.Casal;
import br.com.easymarry.easymarry.model.entities.Fornecedor;
import br.com.easymarry.easymarry.service.CasalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/casal")
@CrossOrigin(origins = "*", allowedHeaders = "*", maxAge = 3600)

public class CasalController {
    @Autowired
    private CasalService casalService;

    @GetMapping
    public List<Casal> getAllCasais(){
        return casalService.findAll();
    }
    @PostMapping
    public Casal savaCasal(@RequestBody Casal casal){
        return casalService.save(casal);
    }
    @PutMapping("/{id}")
    public Casal updateCasal(@PathVariable Long id, @RequestBody Casal casal) {
        casal.setId(id); // Define o ID do fornecedor com base no parâmetro do caminho
        return casalService.save(casal);
    }
    @DeleteMapping("/{id}")
    public void deleteCasal(@PathVariable Long id) {
        casalService.deleteById(id);
    }

}
