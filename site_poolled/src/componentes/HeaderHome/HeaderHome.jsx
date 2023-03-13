import React from "react";

import Botao from "../../Atomos/botaoAcao/Botao"
import Onda from "../../Atomos/Onda/Onda";

import './HeaderHome.css'

const HeaderHome = () => {
    return (
        <header className="topo">
            <div className="fundo-azul">
                <div className="titulo">
                    <h1>summer is coming come get a pool</h1>
                    <Botao texto="Leia Mais" />
                </div>
                    <Onda/>
            </div>
        </header>
    )
}

export default HeaderHome;