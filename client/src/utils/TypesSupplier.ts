export type Supplier = {
    id: number,
    name: string,
    cnpj: string,
    sector: string,
    email: string,
    password: string,
    description: string,
    category: string,
    telephone: string,
    address: string,
};

export type PostSupplier = Omit<Supplier, 'password' | 'cnpj' | 'sector'  | 'telephone' | 'address'>;

export type EditSupplier = Omit<Supplier, 'password' | 'id' | 'cnpj'>;

export type CreateSupplier = Omit<Supplier, 'id'>;
// {
//     name: string;
//     email: string;
//     password: string;
//     description: string;
//     category: string;
//     telephone: string;
//     address: string;
// }

