import  { useState } from "react";
import axios from "axios";
import { CreateSupplier } from "@/utils/TypesSupplier";

export default function SupplierRegistrationForm(){

    

    const [suppliers, setSuppliers] = useState<CreateSupplier[]>([]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [sector, setSector] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [password, setPassword] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [telephone, setTelephone] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      
        const supplier: CreateSupplier = {
            name,
            cnpj,
            sector,
            email,
            password,
            description,
            category,
            telephone,
            address
          };
      


        try {
            await axios.post("http://localhost:8080/api/fornecedores", supplier);
            console.log("Dados enviados para a API com sucesso");
          } catch (error) {
            console.error("Erro ao enviar dados para a API:", error);
          }
        
    };   

    return (
      <form className="page-form">
        <div className="form-group">

              <input type="text" placeholder="Nome" required/>
              <input type="email" placeholder="Email" required/>
              <input type="text" placeholder="Endereço" required/>
              <input type="number" placeholder="CNPJ" required/>
              <input type="text" placeholder="Descrição" required/>
              <input type="tel" placeholder="Telefone" required/>
              <input type="text" placeholder="Sentor" required/>
              <input type="text" placeholder="Categoria" required/>
              <input type="password" placeholder="Senha" required />
        </div>

        <button type="submit">Enviar</button>

      </form>
    //     <form className="page-form" onSubmit={handleSubmit}>
    //         <div className="form-group">
    //             <input type="text" id="nome" name="nome" placeholder="Nome" value={nome} onChange={(event) => setNome(event.target.value)} required />
    //         </div>

    //         <div className="form-group">
    //             <input type="text" id="descricao" name="descricao" value={descricao} onChange={(event) => setDescricao(event.target.value)} required placeholder="Descrição"/>
    //         </div>

    //         <div className="form-group">
    //             <input type="text" id="usuario" name="usuario" value={categoria} onChange={(event) => setCategoria(event.target.value)} required placeholder="Nome de usuário"/>
    //         </div>

    //         <div className="form-group">
    //             <input type="tel" id="telefone" name="telefone" value={telefone} onChange={(event) => setTelefone(event.target.value)} required placeholder="Telefone"/>
    //         </div>

    //         <div className="form-group">
    //             <input type="text" id="Endereco" name="Endereco" value={endereco} onChange={(event) => setEndereco(event.target.value)} required placeholder="Endereço"/>
    //         </div>

    //         <div className="form-group">
    //             <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required placeholder="E-mail" />
    //         </div>

    //         <div className="form-group">
    //             <input type="password" id="senha" name="senha" value={senha} onChange={(event) => setSenha(event.target.value)} required placeholder="Senha"/>
    //         </div>

    //         <button type="submit">Enviar</button>
    // </form>
    );
}