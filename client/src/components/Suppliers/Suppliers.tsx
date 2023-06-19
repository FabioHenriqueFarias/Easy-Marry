import axios from "axios";
import { useEffect, useState } from "react";
import SupplierPost from "../Supplier/Supplier";
import { Supplier, PostSupplier } from "@/utils/TypesSupplier";


export default function Suppliers(){

    const [suppliers, setSuppliers] = useState<Supplier[]>([]);

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get<Supplier[]>('http://localhost:8080/api/fornecedores');
            const suppliersData = response.data;
            setSuppliers(suppliersData);
          } catch (error) {
            console.error('Erro ao obter dados da API:', error);
          }

        }
          fetchData();
    }, []);
    

    return(
    <div className="posts">
    
      {suppliers.map(({id, name, email, description, category}: PostSupplier) => (
            <SupplierPost
              key={id}
              name={name}
              id={id}
              email={email}
              description={description}
              category={category}
        />
          
      ))} 
    </div>
    )
}

