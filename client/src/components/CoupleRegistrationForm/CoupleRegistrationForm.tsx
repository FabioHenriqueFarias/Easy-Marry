import  { useState } from "react";
import axios from "axios";
import { Couple, CreateCouple } from "@/utils/TypesCouple";

export default function CoupleRegistrationForm(){

    

    const [couplers, setCouplers] = useState<Couple[]>([]);

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

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      
        const couple: CreateCouple = {
            firstPersonName,
            secondPersonName,
            firstPersonCpf,
            secondPersonCpf,
            weddingDate,
            email,
            password,
            desiredServices,   
            telephone,
            address
          };
      
          console.log(couple);
          

        try {
            await axios.post("http://localhost:8080/api/casal", couple);
            console.log("Dados enviados para a API com sucesso");
            window.location.reload();
          } catch (error: any) {
            console.error("Erro ao enviar dados para a API:", error.message);
          }
        
    };   

    return (
    <form className="page-form" onSubmit={handleSubmit}>
        <div className="form-group">

              <input type="text" placeholder="Nome da primeira pessoa" onChange={(event) => setFirstPersonName(event.target.value)}  required/>
              <input type="number" placeholder="CPF" onChange={(event) => setFirstPersonCpf(event.target.value)} required/>
              <input type="text" placeholder="Nome da segunda pessoa" onChange={(event) => setSecondPersonName(event.target.value)} required/>
              <input type="number" placeholder="CPF" onChange={(event) => setSecondPersonCpf(event.target.value)}  required/>
              <input type="text" placeholder="Email" onChange={(event) => setEmail(event.target.value)}  required/>
              <input type="text" placeholder="Serviço desejado" onChange={(event) => setDesiredServices(event.target.value)}  required/>
              <input type="date" placeholder="Data desejada" onChange={(event) => setWeddingDate(event.target.value)}  required/>
              <input type="tel" placeholder="Telefone" onChange={(event) => setTelephone(event.target.value)}  required/>
              <input type="text" placeholder="Endereço" onChange={(event) => setAddress(event.target.value)}  required/>
              <input type="password" placeholder="Senha" onChange={(event) => setPassword(event.target.value)}  required />
        </div>

        <button type="submit">Enviar</button>

    </form>
    );
}