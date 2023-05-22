export default function Login(){
    return (
        <form>     
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Senha'/>
                <img src="/public/icon-cadeado.gif" alt="Cadeado"/>
                <p><a href="#">Esqueceu a senha</a></p>
                <button type="submit">Entrar</button>
        </form>
    );
}