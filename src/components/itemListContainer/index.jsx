import React, { useContext} from "react";
import './styles.css';
import { Link } from "react-router-dom";
import { CartContext } from "../../context";
import CartItem from "../cart-item";

const ItemListContainer = ({children, onClose, isOpen}) => {
    const { cart, total, onRemoveItem } = useContext(CartContext);
    return (
        <div 
        className="sidebar"
        style={{
            transform: isOpen ? 'translateX(0)' : 'translateX(100%)'
        }}
        >
            <div className="close-button-container">
                <button onClick={onClose} className="close-button"><i className="bi bi-x"></i></button>
            </div>
            {cart.length === 0 ? (
                <p className='empty-cart'>El carrito está vacío...</p>
                ) : (
                    cart.map((item) => (
                        <CartItem key={item.id} {...item} onRemoveItem={onRemoveItem} />
                    )
                ))}
                
            <p>Total:</p>
            <center><h4>${total}</h4></center>

            <div className='cart-container'>
                <Link to='/cart' className='button-cart'>Ver carrito</Link>
            </div>

            {children}
        </div>
    )
}

export default ItemListContainer;