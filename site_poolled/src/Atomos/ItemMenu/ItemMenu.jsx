import React from "react";
import { Link } from "react-router-dom";

import "./ItemMenu.css"

const ItemMenu = (props) => {
    return (
        <div>
            <li className="nav-item">
                <Link to={props.link} className="nav-link"><h5> {props.texto} </h5>  </Link>
            </li>
        </div>
    )
}

export default ItemMenu;