import { EditSupplier, PostSupplier } from "@/utils/TypesSupplier";
import axios from "axios";
import { useState } from "react";

export default function SupplierPost({id, name, email, description, category}: PostSupplier){
    
    // const [isEditing, setEditing] = useState(false);
    // const [editedData, setEditedData] = useState({
    //     email: email,
    //     endereco: endereco,
    //     telefone: telefone,
    //     descricao: descricao,
    // });

    // const handleEditClick= () => {
    //     setEditing(!isEditing);
    // };

    // const handleSaveClick  =async () => {
    //     try {
    //         await axios.put(`http://localhost:8080/api/fornecedores/${id}`, editedData); 
    //     } catch (error) {
    //         console.error("Erro ao atualizar fornecedor:", error);
    //     } 
    // };
    
    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const {name, value} = event.target;
    //     setEditedData((prevData: EditedData) => ({
    //         ...prevData,
    //         [name]: value
    //     }));
    // };
          
    // const handleDelete = async () => {
    //     try {
    //         await axios.delete(`http://localhost:8080/api/fornecedores/${id}`);
    //         window.location.reload()
    //     } catch (error) {
    //         console.error("Erro ao excluir fornecedor:", error);
    //     }   
    // };
    

    return(
        <div className="post">
            <h1>{name}</h1>
            <p>Email: {email}</p>            
            <p>Descrição: {description}</p>
            <p>Categorias: {category}</p>
            <button disabled={true}>Ver mais</button> 
        </div>
      
    );
}
