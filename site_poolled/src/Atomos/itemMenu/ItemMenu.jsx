import React from "react";
import { Link } from "react-router-dom"

import { Nav } from "react-bootstrap";

import '../../componentes/BarraNav/BarraNav.css';
import './ItemMenu.css'

const ItemMenu = (props) => {
    return (
        <>
            <Nav.Link eventKey={props.link} className="barra-nav-item" to={props.link} >
                <Link to={props.link}>
                    <h5 className="texto-link">
                        {props.item}
                    </h5>
                </Link>
            </Nav.Link>
        </>
    )
}

export default ItemMenu;