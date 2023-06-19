import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";


export default function Login(){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const router = useRouter();

    const loginVerification =async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let validation = false;

        console.log(email, password);
        

        
    
        try {
            const response = await axios.post('http://localhost:8080/api/casal/login', new URLSearchParams({
                email: email,
                password: password
              }), {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              });
            if(response.status === 200) {
                validation = true;
            } 
            if(validation){
                router.push('/supplier/list');
            }
    
        } catch (error: any) {
            console.error(error.message);
        }
        
        
    }


    return (
        <form className="login-page-index" onSubmit={loginVerification}>     
                <input type="email" placeholder='Email' onChange={(event) => setEmail(event.target.value)}/>
                <input type="password" placeholder='Senha' onChange={(event) => setPassword(event.target.value)}/>   
                <p>Esqueceu a senha</p>
                <button type="submit">Entrar</button>
        </form>
    );
}