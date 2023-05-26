import { useEffect, useState } from "react";

export default function Form(){

    type Supplier = {
        nome: string;
        email: string;
        senha: string;
        descricao: string;
        categoria: string;
        telefone: string;
        endereco: string;
    }

    const [suppliers, setSuppliers] = useState<Supplier[]>([]);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      
        const supplier: Supplier = {
          nome,
          email,
          senha,
          descricao,
          categoria,
          telefone,
          endereco
        };
      
        setSuppliers([...suppliers, supplier]);
        
    };   

    useEffect(() => {
        console.log(suppliers);
    }, [suppliers]);

    return (
        <form className="page-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" id="nome" name="nome" placeholder="Nome" value={nome} onChange={(event) => setNome(event.target.value)} required />
            </div>

            <div className="form-group">
                <input type="text" id="sobrenome" name="sobrenome" value={descricao} onChange={(event) => setDescricao(event.target.value)} required placeholder="Sobrenome"/>
            </div>

            <div className="form-group">
                <input type="text" id="usuario" name="usuario" value={categoria} onChange={(event) => setCategoria(event.target.value)} required placeholder="Nome de usuário"/>
            </div>

            <div className="form-group">
                <input type="tel" id="telefone" name="telefone" value={telefone} onChange={(event) => setTelefone(event.target.value)} required placeholder="Telefone"/>
            </div>

            <div className="form-group">
                <input type="text" id="cpf" name="cpf" value={endereco} onChange={(event) => setEndereco(event.target.value)} required placeholder="CPF"/>
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