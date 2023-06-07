export type Supplier = {
    id: number;
    name: string;
    email: string;
    password: string;
    description: string;
    category: string;
    telephone: string;
    address: string;
}
  
export type PostSupplier = {
    id: number;
    name: string;
    email: string;
    description: string;
    telephone: string;
    address: string;
}

export type EditSupplier = {
    email: string;
    address: string;
    telephone: string;
    description: string;
}

export type CreateSupplier = {
    name: string;
    email: string;
    password: string;
    description: string;
    category: string;
    telephone: string;
    address: string;
}

