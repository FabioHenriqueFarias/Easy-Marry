package br.com.easymarry.easymarry.service;

import br.com.easymarry.easymarry.model.entities.Casal;
import br.com.easymarry.easymarry.model.entities.Fornecedor;
import br.com.easymarry.easymarry.repository.CasalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CasalService {

    @Autowired
    private CasalRepository casalRepository;

    public List<Casal> findAll(){
        return casalRepository.findAll();
    }
    public Casal save(Casal casal) {
        return casalRepository.save(casal);
    }

    public Casal update(Casal casal) {
        return casalRepository.save(casal);
    }

    public void deleteById(Long id) {
        casalRepository.deleteById(id);
    }

    public Casal findById(Long id) {
        return casalRepository.findById(id).orElse(null);
    }



}
