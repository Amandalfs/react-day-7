import './EstiloAssinaturaNewsletter.css';

import email  from '../../assets/mail.png'

export default function AssinaturaNewsletter(){
    return (
        <>
            <div className="campo">
                <img className='campo_imagem' src={email} alt="" />
                <input className='campo_email' type="email" name="" id="" placeholder='Insira seu e-mail'/>
                <button className='campo_assinar'>
                    Assinar newsletter
                </button>
            </div>
        </>
    )
}