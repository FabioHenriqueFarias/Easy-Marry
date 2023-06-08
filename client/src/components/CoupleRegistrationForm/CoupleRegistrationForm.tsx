import  { useState } from "react";
import axios from "axios";
import { Couple, CreateCouple } from "@/utils/TypesCouple";

export default function CoupleRegistrationForm(){

    

    // const [couplers, setCouplers] = useState<Couple[]>([]);

    const [firstPersonName, setFirstPersonName] = useState('');
    const [email, setEmail] = useState('');
    const [secondPersonName, setSecondPersonName] = useState('');
    const [firstPersonCpf, setFirstPersonCpf] = useState('');
    const [secondPersonCpf, setSecondPersonCpf] = useState('');
    const [password, setPassword] = useState('');
    const [desiredServices, setDesiredServices] = useState('');
    const [weddingDate, setWeddingDate] = useState('');
    const [telephone, setTelephone] = useState('');
    const [address, setAddress] = useState('');

    // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
      
    //     const couple: CreateCouple = {
    //         firstPersonName,
    //         secondPersonName,
    //         firstPersonCpf,
    //         secondPersonCpf,
    //         weddingDate,
    //         email,
    //         password,
    //         desiredServices,   
    //         telephone,
    //         address
    //       };
      


    //     try {
    //         await axios.post("http://localhost:8080/api/fornecedores", supplier);
    //         console.log("Dados enviados para a API com sucesso");
    //       } catch (error) {
    //         console.error("Erro ao enviar dados para a API:", error);
    //       }
        
    // };   

    // return (
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
    // )
}