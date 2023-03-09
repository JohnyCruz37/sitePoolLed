import React from "react";
import { Link } from "react-router-dom"
import './BarraNav.css'
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap"

import logoMenu from "../../img/logo.png"

const BarraNav = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="light">
                <Container>
                    <Navbar.Brand href="#">
                        <img src={logoMenu} alt="logo da empresa" width="80" height="80" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto me-2 me-lg-0">
                            <Link to="/"><Button> <h5> home </h5> </Button></Link>
                            <Link to="/sobre"><Button> <h5> sobre </h5> </Button></Link>
                            <Link to="/servicos"><Button> <h5> serviços </h5> </Button></Link>
                            <Link to="#"><Button> <h5> produtos </h5> </Button></Link>
                            <Link to="/contato"><Button> <h5> contato </h5> </Button></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default BarraNav;