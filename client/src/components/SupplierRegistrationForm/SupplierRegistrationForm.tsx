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
            window.location.reload();
          } catch (error) {
            console.error("Erro ao enviar dados para a API:", error);
          }
        
    };   

    return (
      <form className="page-form" onSubmit={handleSubmit}>
        <div className="form-group">

              <input type="text" placeholder="Nome" onChange={(event) => setName(event.target.value)} required/>
              <input type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)}  required/>
              <input type="text" placeholder="Endereço" onChange={(event) => setAddress(event.target.value)} required/>
              <input type="number" placeholder="CNPJ" onChange={(event) => setCnpj(event.target.value)} required/>
              <input type="text" placeholder="Descrição" onChange={(event) => setDescription(event.target.value)} required/>
              <input type="tel" placeholder="Telefone" onChange={(event) => setTelephone(event.target.value)} required/>
              <input type="text" placeholder="Sentor" onChange={(event) => setSector(event.target.value)} required/>
              <input type="text" placeholder="Categoria" onChange={(event) => setCategory(event.target.value)} required/>
              <input type="password" placeholder="Senha" onChange={(event) => setPassword(event.target.value)} required />
        </div>

        <button type="submit">Enviar</button>

      </form>
    );
}