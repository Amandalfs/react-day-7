import './EstiloInfos.css'

import folhaInfos from '../../assets/folhasInfos.png'
import circulo from '../../assets/Ellipse.png'

export default function Infos(){
    return (
        <>
            <section className='cointainer-infos'>
                <img src={folhaInfos} alt=""  className='infos-imagem'/>
                <div className="infos">
                    <h2 className='infos-subTitle'>Como conseguir </h2>
                    <h1 className='infos-title'>minha planta</h1>
                    <div className="card-info">
                        <img src={circulo}  alt="" />
                        <h2>Escolha suas plantas</h2>
                    </div>
                    <div className="card-info">
                        <img src={circulo}  alt="" />
                        <h2>Faça seu pedido</h2>
                    </div>
                    <div className="card-info">
                        <img src={circulo} alt="" />
                        <h2>Aguarde na sua casa</h2>
                    </div>
                </div>
            </section>
        </>
    )
}