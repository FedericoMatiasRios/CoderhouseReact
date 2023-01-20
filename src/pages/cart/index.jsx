import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context";
import { CartItem, Checkout } from "../../components";
import './styles.css';
import { firebaseServices } from "../../services";

const { createOrder} = firebaseServices;

const ItemList = () =>  {
    const { cart, total } = useContext(CartContext);
    const [setOrderResult] = useState();
    const onHandlerOrder = async () => {
        const newOrder = {
            buyer: {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                shippingMethod: 'delivery',
                address: 'Calle falsa 123',
            },
            createdAt: new Date(),
            id: 1,
            items: cart,
            payment: {
                currency: 'USD',
                method: 'cash',
                type: 'cash',
            },
            seller: {
                id: 1,
                name: 'Pepito',
                phone: '123456789',
                email: 'adwda@gmail.com'
            },
            shipping: {
                deliveryDate: new Date() + 7,
                trackingNumber: '123456789',
                type: 'delivery',
            },
            total: total,
        }
        if (document.getElementById("email").value === document.getElementById("email2").value) {
            const result = await createOrder(newOrder);
            //setOrderResult(result);
        } else {
            console.log("Los mails no coinciden");
        }
        
    }

    return (
    <div className="contenedor-cart">
        <h1>Carrito</h1>
        <div className="cart-content">
                {cart.length > 0 ? (
                    <>
                    {cart.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <Checkout/>
                    <div className="button-container-order">
                        <button type="button" className="button-cart" onClick={onHandlerOrder}>
                            Comprar ahora
                        </button>
                    </div>
                    </> 
                ) : (
                <div>
                    <h2>Carrito vacío...</h2>
                    <div className="button-container">
                        <Link to="/" className="button-cart">Inicio</Link>
                    </div>
                </div>
            )}
            </div>
    </div>
    )
}

export default ItemList;