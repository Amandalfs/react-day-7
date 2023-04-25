import { useState } from 'react';
import { api } from '../../../axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './EstiloAssinaturaNewsletter.css';

import Menu from '../Menu/Menu';
import'../Menu/EstiloMenu.css';

import email  from '../../assets/mail.png';
import arvore from '../../assets/imagem-hero.png';
import amarelo from '../../assets/anomalia.png'




export default function AssinaturaNewsletter(){
    const [emailValido, setEmaiValido] = useState();
    const [valido, setValido] = useState(false)

    function verificarEmail(email){
        let terAroba = email.includes('@');
        let terPonto = email.includes('.', 3);
        
        if(email[0]!='@' && email[0]!='.' && terAroba && terPonto && email[1]!='@' && email[1]!='.' && email[email.length-1]!='@' && email[email.length-1]!='.'){
            setEmaiValido(email);
            setValido(true)
        } else {
            setEmaiValido();
            setValido(false)
        }
    }

    async function enviarEmail(){
        const nome = emailValido.split("@")[0]
        try {
            const response = await api.post('/send', {
                "emailReceive": emailValido,
                "titulo": "Voce assinou o Newsletter da CasaVerde",
                "texto": `<p>
                Olá, ${nome}.
                <br>
                Boas-vindas à Casa Verde! Você se cadastrou em 
                <br>
                nossa newsletter e vai começar a receber e-mails 
                <br>
                com as novidades de nossa loja e dicas de como 
                <br>
                cuidar de suas plantas.
                <br>
                Até logo!
                </p>`
            })
            console.log(response);
        } catch (error) {
            console.log(error)
        }
       
        
    } 

    function enviarSMS(){
        if(valido){
            enviarEmail();
            toast.info(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${emailValido}`)
        }
    }

    return (
        <>
        <section className='hero'>
            <ToastContainer></ToastContainer>
            <Menu></Menu>
            <h2 className='sub-title_newsletter'>Sua casa com as</h2>
            <h1 className='title_newsletter'>
                melhores 
                plantas
            </h1>
            <p className='text_newsletter'>
                Encontre aqui uma vasta seleção de plantas para decorar a sua casa e 
                torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail 
                e assine nossa newsletter para saber das novidades da marca.
            </p>
            <div className="campo">
                <input className='campo_email' type="email" name="" id="" placeholder='Insira seu e-mail' onChange={(e) =>{ verificarEmail(e.target.value)}}/>
                <button type='button' className='campo_assinar' onClick={enviarSMS}>
                    Assinar newsletter
                </button>
                <img className='campo_imagem' src={email} alt="" />
            </div>
        </section>
        <div className='imagens-background'>
            <img src={arvore} className='background-arvore' alt="" />
            <img src={amarelo} className='background-amarelo' alt="" />
        </div>
        
        
        </>
    )
}