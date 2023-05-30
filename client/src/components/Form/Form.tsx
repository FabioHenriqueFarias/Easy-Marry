import  { useState } from "react";
import axios from "axios";
import { CreateSupplier } from "@/utils/types";

export default function Form(){

    

    const [suppliers, setSuppliers] = useState<CreateSupplier[]>([]);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      
        const supplier: CreateSupplier = {
          nome,
          email,
          senha,
          descricao,
          categoria,
          telefone,
          endereco
          };
      
        setSuppliers([...suppliers, supplier]);

        try {
            await axios.post("http://localhost:8080/api/fornecedores", suppliers);
            console.log("Dados enviados para a API com sucesso");
          } catch (error) {
            console.error("Erro ao enviar dados para a API:", error);
          }
        
    };   

    return (
        <form className="page-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" id="nome" name="nome" placeholder="Nome" value={nome} onChange={(event) => setNome(event.target.value)} required />
            </div>

            <div className="form-group">
                <input type="text" id="descricao" name="descricao" value={descricao} onChange={(event) => setDescricao(event.target.value)} required placeholder="Descrição"/>
            </div>

            <div className="form-group">
                <input type="text" id="usuario" name="usuario" value={categoria} onChange={(event) => setCategoria(event.target.value)} required placeholder="Nome de usuário"/>
            </div>

            <div className="form-group">
                <input type="tel" id="telefone" name="telefone" value={telefone} onChange={(event) => setTelefone(event.target.value)} required placeholder="Telefone"/>
            </div>

            <div className="form-group">
                <input type="text" id="Endereco" name="Endereco" value={endereco} onChange={(event) => setEndereco(event.target.value)} required placeholder="Endereço"/>
            </div>

            <div className="form-group">
                <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required placeholder="E-mail" />
            </div>

            <div className="form-group">
                <input type="password" id="senha" name="senha" value={senha} onChange={(event) => setSenha(event.target.value)} required placeholder="Senha"/>
            </div>

            <button type="submit">Enviar</button>
    </form>
    )
}