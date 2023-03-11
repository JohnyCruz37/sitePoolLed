import React from "react";
import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"

import logoMenu from "../../img/logo.png"
import Botao from "../../Atomos/botaoAcao/Botao"

import './BarraNav.css'
import ItemMenu from "../../Atomos/itemMenu/ItemMenu";

const BarraNav = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="barra-nav">
                <Container className="container-nav">
                    <Navbar.Brand href="#">
                        <img src={logoMenu} alt="logo da empresa" width="60" height="60" className="img-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="nav-icone" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="barra-nav-itens">
                            <ItemMenu item="home" link="/" />
                            <ItemMenu item="sobre" link="/sobre" />
                            <ItemMenu item="serviços" link="/servicos" />
                            <ItemMenu item="galeria" link="/galeria" />
                            <ItemMenu item="contato" link="/contato" />
                        </Nav>
                    </Navbar.Collapse>
                    <Container className="btn-orcamento">
                        <Botao texto="Orçamento" />
                    </Container>
                </Container>
            </Navbar>
        </>
    )
}

export default BarraNav;