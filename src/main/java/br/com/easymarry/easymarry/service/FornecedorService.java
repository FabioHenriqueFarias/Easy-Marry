package br.com.easymarry.easymarry.service;


import br.com.easymarry.easymarry.model.entities.Fornecedor;
import br.com.easymarry.easymarry.repository.FornecedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FornecedorService {

    @Autowired
    private FornecedorRepository fornecedorRepository;

    public List<Fornecedor> findAll() {
        return fornecedorRepository.findAll();
    }

    public Fornecedor save(Fornecedor fornecedor) {
        return fornecedorRepository.save(fornecedor);
    }

    public Fornecedor update(Fornecedor fornecedor) {
        return fornecedorRepository.save(fornecedor);
    }

    public void deleteById(Long id) {
        fornecedorRepository.deleteById(id);
    }

    public Fornecedor findById(Long id) {
        return fornecedorRepository.findById(id).orElse(null);
    }

    // Adicionar outros métodos conforme necessário, como save, update, delete, findById, etc.
}
