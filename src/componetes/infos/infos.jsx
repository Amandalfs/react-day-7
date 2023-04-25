import './EstiloInfos.css'

import folhaInfos from '../../assets/folhasinfos.png'


export default function Infos(){
    return (
        <>
            <section className='cointainer-infos'>
                <img src={folhaInfos} alt=""  className='infos-imagem'/>
                <div className="infos">
                    <h2>Como conseguir </h2>
                    <h1>minha planta</h1>
                    <div className="icons">
                        <img src="" alt="" />
                        <h2>Escolha suas plantas</h2>
                    </div>
                    <div className="icons">
                        <img src="" alt="" />
                        <h2>Faça seu pedido</h2>
                    </div>
                    <div className="icons">
                        <img src="" alt="" />
                        <h2>Aguarde na sua casa</h2>
                    </div>
                </div>
            </section>
        </>
    )
}