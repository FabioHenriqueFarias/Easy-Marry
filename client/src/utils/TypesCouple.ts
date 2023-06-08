export type Couple = {
    id: number;
    firstPersonName: string,
    secondPersonName: string,
    firstPersonCpf: string,
    secondPersonCpf: string,
    weddingDate: string,
    email: string,
    password: string,
    desiredServices: string,
    address: string,
    telephone: string
};

export type CreateCouple = Omit<Couple, 'id'>;
