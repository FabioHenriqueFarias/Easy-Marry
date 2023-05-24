package br.com.easymarry.easymarry.service;

import br.com.easymarry.easymarry.model.entities.Servico;
import br.com.easymarry.easymarry.repository.ServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicoService {

    @Autowired
    private ServicoRepository servicoRepository;

    public List<Servico> findAll() {
        return servicoRepository.findAll();
    }

    // Adicionar outros métodos conforme necessário, como save, update, delete, findById, etc.
}

