import React from "react";

import './Botao.css'

const Botao = (props) => {
    return (
        <div>
            <button className="botao-acao" type="button"> {props.texto} </button>
        </div>
    )
}

export default Botao;

