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

    // Adicionar outros métodos conforme necessário, como save, update, delete, findById, etc.
}
