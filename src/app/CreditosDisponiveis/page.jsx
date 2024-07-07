'use client';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import "./CreditosDisponiveis.css";
import handler from "@/pages/api/hello";

const proposals = [
    { id: '#1', rate: '5%', description: 'construção + créditos', payment: 'P /pagamento até 90 dias' },
    { id: '#2', rate: '6%', description: 'construção + créditos', payment: 'P /pagamento até 90 dias' },
    { id: '#3', rate: '6.1%', description: 'construção + créditos', payment: 'P /pagamento até 90 dias' },
    { id: '#4', rate: '7%', description: 'construção + créditos', payment: 'P /pagamento até 90 dias' },
];

function CreditosDisponiveis() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);



    const handlerselection = (e)=>{
        
        const  valorclicado = e.target
        console.log(valorclicado)
    }

    const handlerPerfil = async () => {
        setIsLoading(true);
        try {
            // Simular chamada à API de login
            await new Promise((resolve) => setTimeout(resolve, 3000));
            router.push('meuPerfil');
        } catch (error) {
            console.error('Login failed:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="conteudo-principal">
            <div className="content">
                <header className="content-header">
                    Melhor proposta para você <p onClick={handlerPerfil} className="meuPerfil">
                          {isLoading ? "loading...":"Meu perfil"}
                



                    </p>
                </header>

                <div className="box-content">
                    <div className="title-box-content" >
                        <p id="qtd">QTD</p>
                        <p>TAXA</p>
                        <p>DESCRIÇÃO</p>
                        <p>FORMA DE PAGAMENTO</p>
                    </div>
                    {proposals.map((item) => (
                        <div key={item.id} className="proposal-item">
                            <div className="proposal-id" >ID: {item.id}</div>
                            <div className="proposal-rate" dataValor={item.rate} >Taxa:<span>{item.rate}</span> </div>
                            <div className="proposal-description">Descrição: {item.description}</div>
                            <div className="proposal-payment">Pagamento: {item.payment}</div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default CreditosDisponiveis;
