import React, {useContext} from "react";
import './styles.css';
import { CartContext } from "../../context";

const CartWidget = (props) => {
    const { cart } = useContext(CartContext);
    return (
        <li onClick={props.onHandlerClick}><a href="#"><i className="bi bi-cart4"></i> <span className="badge rounded-pill translate-middle bg-success">{cart.length}</span></a></li>
    )
}

export default CartWidget;