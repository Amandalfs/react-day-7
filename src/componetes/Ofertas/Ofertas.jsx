import BtnComprar from "../BtnComprar/BtnComprar";

import imgProduto from '../../assets/produto-01.png'

export default function Ofertas(){
    return (<>
        <header className="ofertas-header">
            <h2>Conheça nossas</h2>
            <h1>ofertas</h1>
        </header>
        <main className="amostra">
            <div className="produto">
                <img className="produto_imagem" src={imgProduto} alt="" />
                <div className="produto_Descricao">
                    <h1>
                        Ajuga
                        reptans
                    </h1>
                    <h2>R$ 20,00</h2>
                    <BtnComprar/>
                </div>
            </div>
            <div className="produto">
                <img className="produto_imagem" src={imgProduto} alt="" />
                <div className="produto_Descricao">
                    <h1>
                        Ajuga
                        reptans
                    </h1>
                    <h2>R$ 20,00</h2>
                    <BtnComprar/>
                </div>
            </div>
            <div className="produto">
                <img className="produto_imagem" src={imgProduto} alt="" />
                <div className="produto_Descricao">
                    <h1>
                        Ajuga
                        reptans
                    </h1>
                    <h2>R$ 20,00</h2>
                    <BtnComprar/>
                </div>
            </div>
            <div className="produto">
                <img className="produto_imagem" src={imgProduto} alt="" />
                <div className="produto_Descricao">
                    <h1>
                        Ajuga
                        reptans
                    </h1>
                    <h2>R$ 20,00</h2>
                    <BtnComprar/>
                </div>
            </div>
            <div className="produto">
                <img className="produto_imagem" src={imgProduto} alt="" />
                <div className="produto_Descricao">
                    <h1>
                        Ajuga
                        reptans
                    </h1>
                    <h2>R$ 20,00</h2>
                    <BtnComprar/>
                </div>
            </div>
            <div className="produto">
                <img className="produto_imagem" src={imgProduto} alt="" />
                <div className="produto_Descricao">
                    <h1>
                        Ajuga
                        reptans
                    </h1>
                    <h2>R$ 20,00</h2>
                    <BtnComprar/>
                </div>
            </div>
            
        </main>
    </>)
}