export type Supplier = {
    id: number;
    nome: string;
    email: string;
    senha: string;
    descricao: string;
    categoria: string;
    telefone: string;
    endereco: string;
}
  
export type PostSupplier = {
    id: number;
    nome: string;
    email: string;
    descricao: string;
    telefone: string;
    endereco: string;
}

export type CreateSupplier = {
    nome: string;
    email: string;
    senha: string;
    descricao: string;
    categoria: string;
    telefone: string;
    endereco: string;
}

export type EditedData = {
    email: string;
    endereco: string;
    telefone: string;
    descricao: string;
  }