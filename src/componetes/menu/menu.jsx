import './EstiloMenu.css';

import logo  from '../../assets/logo.png'

export default function Menu(){
    return (
        <>
            <header className="menu">
                <div className="menu_imagem">
                    <img src={logo} alt="" />
                </div>
                <nav className="menu_navegacao">
                        <div className='nav_lista'>
                            <p>Como fazer</p>

                            <p>/</p>

                            <p>Ofertas</p>

                            <p>/</p>

                            <p>Depoimentos</p>

                            <p>/</p>
                            
                            <p>Videos</p>
                        </div>
                        <div className="nav_carrinho">
                            <p>Meu carrinho</p>    
                        </div>
                </nav>
               
            </header>
        </>
    )
}
