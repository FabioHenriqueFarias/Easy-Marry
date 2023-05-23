
export default function Login(){
    return (
        <form className="login-page-index">     
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Senha'/>   
                <p>Esqueceu a senha</p>
                <button type="submit">Entrar</button>
        </form>
    );
}