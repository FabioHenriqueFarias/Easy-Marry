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
                <div className="container-button-casal">
                    <button><Link href='supplier/register'>Você é fornecedor</Link></button>
                </div>
                
                <div className="container-button-fornecedor">
                    <button><Link href='couple/coupleregistration'>Você é um casal</Link></button>
                </div>
            </main>
       </> 
    );
}