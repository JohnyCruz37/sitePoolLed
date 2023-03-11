import React from "react";

import './Header.css'

const Header = (props) => {
    return (
        <header className="header-topo">
            <div className="fundo-azul">
                <div className="header-titulo">
                    <h1> {props.titulo} </h1>
                </div>
            </div>
        </header>
    )
}

export default Header;