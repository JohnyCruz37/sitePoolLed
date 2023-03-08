import React from "react";
import { Link } from "react-router-dom"


import ItemMenu from "../../Atomos/ItemMenu/ItemMenu";

import logo from '../../img/logo.png'

import './BarraNav.css'

const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top" id="navbar">
                <div className="container py-3">
                    <Link to="#" className="navbar-brand">
                        <img src={logo} alt="logo da empresa" className="img-logo" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbar"
                        aria-controls="navbar-items"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="bi bi-list"></i>
                    </button>

                    {/* BARRA DE NAVEGAÇÃO */}
                    <div className="collapse navbar-collapse" id="navbar-items">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <ItemMenu link="/" texto="home" className="Active" />
                            <ItemMenu link="/sobre" texto="sobre" />
                            <ItemMenu link="/servicos" texto="serviços" />
                            <ItemMenu link="/galeria" texto="galeria" />
                            <ItemMenu link="/contato" texto="contato" />


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;