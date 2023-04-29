import './EstiloProduto.css'
import imgProduto from '../../assets/produto-01.png';
import BtnComprar from "../BtnComprar/BtnComprar";

export default function Produto(props){
    return (
        <>
            <div className="produto">
                <img className="produto_imagem" src={imgProduto} alt="" />
                <div className="produto_Descricao">
                    <h1>
                        {props.name}
                    </h1>
                    <h2>R$ {props.price}</h2>
                    <BtnComprar/>
                </div>
            </div>
        </>)
}