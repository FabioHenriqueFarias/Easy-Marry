import { EditedData, PostSupplier } from "@/utils/types";
import axios from "axios";
import { useState } from "react";

export default function SupplierPost({id, nome, email, descricao, telefone, endereco}:PostSupplier){
    
    const [isEditing, setEditing] = useState(false);
    const [editedData, setEditedData] = useState({
        email: email,
        endereco: endereco,
        telefone: telefone,
        descricao: descricao,
    });

    const handleEditClick= () => {
        setEditing(!isEditing);
    };

    const handleSaveClick  =async () => {
        try {
            await axios.put(`http://localhost:8080/api/fornecedores/${id}`, editedData); 
        } catch (error) {
            console.error("Erro ao atualizar fornecedor:", error);
        } 
    };
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setEditedData((prevData: EditedData) => ({
            ...prevData,
            [name]: value
        }));
    };
          
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/fornecedores/${id}`);
        } catch (error) {
            console.error("Erro ao excluir fornecedor:", error);
        }   
    };

    return(
        <div className="post">
            <h1>{nome}</h1>
            <input
                name="email"
                value={`Email: ${editedData.email}`}
                disabled={!isEditing}
                onChange={handleInputChange}
            />
            <input
                name="endereco"
                value={`Endereço: ${editedData.endereco}`}
                disabled={!isEditing}
                onChange={handleInputChange}
            />
            <input
                name="telefone"
                value={`Telefone: ${editedData.telefone}`}
                disabled={!isEditing}
                onChange={handleInputChange}
            />
            <input
                name="descricao"
                value={`Descrição: ${editedData.descricao}`}
                disabled={!isEditing}
                onChange={handleInputChange}
            />
            {isEditing ? (
                <button onClick={handleSaveClick}>Salvar</button>
            ) : (
                <button onClick={handleEditClick}>Editar</button>
            )}
            <button onClick={handleDelete}>Excluir</button>
        </div>
    );
}
