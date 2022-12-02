import React from "react";
import './styles.css';

const Navbar = (props) => {
    return (
        <ul>
            <li><a href="#">Brand Logo</a></li>
            <li><a href="#">Categoría 1</a></li>
            <li><a href="#">Categoría 2</a></li>
            <li><a href="#">Categoría 3</a></li>
            <li><a href="#">Categoría 4</a></li>
            {props.children}
        </ul>
    )
}

export default Navbar;