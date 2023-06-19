package br.com.easymarry.easymarry.controller;

import br.com.easymarry.easymarry.model.entities.Casal;
import br.com.easymarry.easymarry.model.entities.Fornecedor;
import br.com.easymarry.easymarry.service.CasalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
        casal.setId(id);
        return casalService.update(casal);
    }
    @DeleteMapping("/{id}")
    public void deleteCasal(@PathVariable Long id) {
        casalService.deleteById(id);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam("email") String email, @RequestParam("password") String password) {
        System.out.println(email);
        boolean isValidCredentials = casalService.validateLoginCredentials(email, password);

        if (isValidCredentials) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    }
