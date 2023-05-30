import { PostSupplier } from "@/utils/types";

export default function SupplierPost({id, nome, email, descricao, telefone, endereco}:PostSupplier){
    return(
        <div className="post">
            <h1>{nome}</h1>
            <p>Email:{email}</p>
            <p>Endereço:{endereco}</p>
            <p>Telefone: {telefone}</p>
            <p>Descrição: {descricao}</p>
            <button>Editar</button>
            <button>Excluir</button>
        </div>
    );
}
