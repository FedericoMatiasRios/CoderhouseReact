import React from "react";
import './styles.css';

const CartWidget = (props) => {
    return (
        <li onClick={props.onHandlerClick}><a href="#"><i class="bi bi-cart4"></i> <span class="badge rounded-pill translate-middle bg-success">0</span></a></li>
    )
}

export default CartWidget;