import { CADEADO } from "@/utils/Patys";

export default function Login(){
    return (
        <form>     
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Senha'/>        
                {/* <p><img src={CADEADO} alt="Cadeado"/><a href="#">Esqueceu a senha</a></p> */}
                <button type="submit">Entrar</button>
        </form>
    );
}