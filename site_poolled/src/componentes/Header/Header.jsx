import React from "react";

import BarraNav from "../BarraNav/BarraNav";
import Botao from "../../Atomos/botaoAcao/Botao"

import imgTopo from "../../img/header.jpg"

import './Header.css'

const Header = () => {
    return (
        <header className="topo">
            <div className="fundo-branco">
                <BarraNav />
                <div className="titulo">
                    <h1>summer is coming come get a pool</h1>
                    <Botao texto="Leia Mais" />
                </div>
            </div>
        </header>
    )
}

export default Header;