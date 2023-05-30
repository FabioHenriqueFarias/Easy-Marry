import axios from "axios";
import { PostSupplier, Supplier } from "@/utils/types";
import { useEffect, useState } from "react";
import SupplierPost from "../Post/post";


export default function Post(){

    let teste: Supplier = {
      id: 45,
      nome: "Nome do Fornecedor",
      email: "email@example.com",
      descricao: "Descrição do fornecedor",
      telefone: "123456789",
      endereco: "Endereço do fornecedor",
      senha: "45",
      categoria: "Categoria do fornecedor",

    }

    let teste1: Supplier = {
      id: 46,
      nome: "Nome do Fornecedor",
      email: "email@example.com",
      descricao: "Descrição do fornecedor",
      telefone: "123456789",
      endereco: "Endereço do fornecedor",
      senha: "45",
      categoria: "Categoria do fornecedor",

    }

    const [suppliers, setSuppliers] = useState<Supplier[]>([teste, teste1, teste1,teste1,teste1, teste1, teste1, teste1, teste1]);

    // useEffect(() => {
    //     async function fetchData() {
    //       try {
    //         const response = await axios.get<Supplier[]>('http://localhost:8080/api/fornecedores');
    //         const suppliersData = response.data;
    //         setSuppliers(suppliersData);
    //         // Restante do código para utilizar os dados obtidos
    //       } catch (error) {
    //         console.error('Erro ao obter dados da API:', error);
    //       }

    //     }
    //       fetchData();
    // }, []);
    

    return(
    <div className="posts">
      {suppliers.map(({id, nome, email, descricao, telefone, endereco}: PostSupplier) => (
            <SupplierPost
              key={id}
              id={id}
              nome={nome}
              email={email}
              descricao={descricao}
              telefone={telefone}
              endereco={endereco}
        />
          
      ))}
    </div>
    )
}

