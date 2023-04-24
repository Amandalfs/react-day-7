import './EstiloAssinaturaNewsletter.css';

import Menu from './componetes/menu/menu.jsx';
import'./componetes/menu/EstiloMenu.css';

import email  from '../../assets/mail.png';
import arvore from '../../assets/imagem-hero.png';
import amarelo from '../../assets/anomalia.png'

export default function AssinaturaNewsletter(){
    return (
        <>
        <section className='hero'>
            <Menu/>
            <h2>Sua casa com as</h2>
            <h1>
                melhores 
                plantas
            </h1>
            <p>
                Encontre aqui uma vasta seleção de plantas para decorar a sua casa e 
                torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail 
                e assine nossa newsletter para saber das novidades da marca.
            </p>
            <div className="campo">
                <img className='campo_imagem' src={email} alt="" />
                <input className='campo_email' type="email" name="" id="" placeholder='Insira seu e-mail'/>
                <button className='campo_assinar'>
                    Assinar newsletter
                </button>
            </div>
        </section>
        <img src={arvore} className='background-arvore' alt="" />
        <img src={amarelo} className='background-amarelo' alt="" />
        </>
    )
}