import './EstiloBtnComprar.css'

import setaBtn from "../../assets/seta.png"

export default function BtnComprar(){
    return (<>
        <button className="btnComprar"> 
            Comprar<img src={setaBtn} alt="" />
        </button>
    </>)
}