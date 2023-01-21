import React from "react";
import './styles.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const NavBar = (props) => {
    return (
        <ul>
            <li><Link to='/'><img src={logo} width="200" alt="" /></Link></li>
            <li><Link to='/category/samsung'>Samsung</Link></li>
            <li><Link to='/category/xiaomi'>Xiaomi</Link></li>
            <li><Link to='/category/motorola'>Motorola</Link></li>
            <li><Link to='/category/apple'>Apple</Link></li>
            {props.children}
        </ul>
    )
}

export default NavBar;