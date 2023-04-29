import Produto from "../Produto/Produto";
import { apiProdutos } from "../../../axios";
import { useEffect, useState } from "react";

export default function Ofertas(){
    const [Produtos, SetProdutos] = useState([]);
    async function consumirProdutos(){
        const Result = await apiProdutos.get('bugan/41d60ffa23fa0c4044cc138bf670780d/raw')
        SetProdutos(Result.data);
    }
    useEffect(()=>{
        consumirProdutos();
    })
    return (<>
        <header className="ofertas-header">
            <h2>Conheça nossas</h2>
            <h1>ofertas</h1>
        </header>
        <main className="amostra">
            {
                 Produtos.map((prod, indice)=>{
                   return <Produto name={prod.name} price={prod.preco} key={indice++} imagem={prod.imagem} />
                })
            }
        </main>
    </>)
}