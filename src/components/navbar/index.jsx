import React from "react";
import './styles.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <ul>
            <li><Link to='/'>Brand Logo</Link></li>
            <li><Link to='/category/1'>Categoría 1</Link></li>
            <li><Link to='/category/2'>Categoría 2</Link></li>
            <li><Link to='/category/3'>Categoría 3</Link></li>
            <li><Link to='/category/4'>Categoría 4</Link></li>
            {props.children}
        </ul>
    )
}

export default Navbar;