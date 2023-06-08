import axios from "axios";
import { useEffect, useState } from "react";
import SupplierPost from "../Supplier/Supplier";
import { Supplier, PostSupplier } from "@/utils/TypesSupplier";


export default function Suppliers(){

  // let teste:Supplier = {
    
  //     id: 1,
  //     nome: "Nome do Fornecedor",
  //     email: "email@example.com",
  //     senha: "senha123",
  //     descricao: "Descrição do fornecedor",
  //     categoria: "Categoria do fornecedor",
  //     telefone: "123456789",
  //     endereco: "Endereço do fornecedor",
  // }


  //   const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  //   useEffect(() => {
  //       async function fetchData() {
  //         try {
  //           const response = await axios.get<Supplier[]>('http://localhost:8080/api/fornecedores');
  //           const suppliersData = response.data;
  //           setSuppliers(suppliersData);
  //         } catch (error) {
  //           console.error('Erro ao obter dados da API:', error);
  //         }

  //       }
  //         fetchData();
  //   }, []);
    

    return(
    <div className="posts">
      <SupplierPost />
      <SupplierPost />
      <SupplierPost />
      {/* {suppliers.map(({id, nome, email, descricao, telefone, endereco}: PostSupplier) => (
            <SupplierPost
              key={id}
             nome={nome}
                id={id}
             email={email}
              descricao={descricao}
              telefone={telefone}
              endereco={endereco}
        />
          
      ))} */}
    </div>
    )
}

