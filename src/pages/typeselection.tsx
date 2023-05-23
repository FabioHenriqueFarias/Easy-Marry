import Logo from "@/components/Logo/Logo";
import Head from "next/head";
import Link from "next/link";

export default function TypeSelection(){
    return (
       <>
            <Head>
                <title>Easy Marry</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <header>
                <Logo />
            </header>
            <main className="page-selection">
                <h1>Escolha seu Tipo de Cadastro</h1>
                <div className="container-img-casal">
                    <button><Link href='/supplierregistration'>Você é fornecedor</Link></button>
                </div>
                
                <div className="container-img-fornecedor"></div>
                <button><Link href='/userregistration'>Acesso para fornecedores</Link></button>
                
            </main>
       </> 
    );
}