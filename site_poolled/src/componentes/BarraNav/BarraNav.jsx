import React from "react";
import { Link } from "react-router-dom"
import { Navbar, Nav, Container, } from "react-bootstrap"

import logoMenu from "../../img/logo.png"

import Botao from "../../Atomos/botaoAcao/Botao"

import './BarraNav.css'

const BarraNav = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="barra-nav">
                <Container className="container-nav">
                    <Navbar.Brand href="#">
                        <img src={logoMenu} alt="logo da empresa" width="80" height="80" className="img-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="nav-icone" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="barra-nav-itens">
                            <Nav.Link eventKey="/" className="barra-nav-item" to="/"> <Link to="/"> <h5 className="texto-link"> home </h5> </Link>  </Nav.Link>
                            <Nav.Link eventKey="/sobre" className="barra-nav-item" to="/sobre"> <Link to="/sobre"> <h5 className="texto-link"> sobre </h5> </Link> </Nav.Link>
                            <Nav.Link eventKey="/servicos" className="barra-nav-item" to="/servicos"> <Link to="/servicos"> <h5 className="texto-link"> serviços </h5> </Link> </Nav.Link>
                            <Nav.Link eventKey="/galeria" className="barra-nav-item" to="/galeria"> <Link to="/galeria"> <h5 className="texto-link"> galeria </h5> </Link> </Nav.Link>
                            <Nav.Link eventKey="/contato" className="barra-nav-item" to="/contato"> <Link to="/contato"> <h5 className="texto-link"> contato </h5> </Link> </Nav.Link>
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