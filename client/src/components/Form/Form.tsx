export default function Form(){
    return (
        <form className="page-form">
            <div className="form-group">
                <input type="text" id="nome" name="nome" placeholder="Nome" required />
            </div>

            <div className="form-group">
                <input type="text" id="sobrenome" name="sobrenome" required placeholder="Sobrenome"/>
            </div>

            <div className="form-group">
                <input type="text" id="usuario" name="usuario" required placeholder="Nome de usuário"/>
            </div>

            <div className="form-group">
                <input type="tel" id="telefone" name="telefone" required placeholder="Telefone"/>
            </div>

            <div className="form-group">
                <input type="text" id="cpf" name="cpf" required placeholder="CPF"/>
            </div>

            <div className="form-group">
                <input type="email" id="email" name="email" required placeholder="E-mail" />
            </div>

            <div className="form-group">
                <input type="password" id="senha" name="senha" required placeholder="Senha"/>
            </div>

            <button type="submit">Enviar</button>
    </form>
    )
}